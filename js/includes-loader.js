/**
 * Centralized Header/Footer Loader
 * Loads header and footer from includes/ folder and adjusts relative paths
 */

(function() {
    'use strict';
    
    /**
     * Determine the depth level of the current page
     * Returns the number of ../ needed to reach root
     */
    function getPathDepth() {
        const path = window.location.pathname;
        const parts = path.split('/').filter(part => part && part !== 'index.html');
        
        // Count directory levels (excluding the file itself)
        let depth = parts.length;
        if (parts[parts.length - 1] && parts[parts.length - 1].includes('.html')) {
            depth--;
        }
        
        return depth;
    }
    
    /**
     * Generate the prefix path based on depth
     */
    function getPathPrefix() {
        const depth = getPathDepth();
        if (depth === 0) {
            return './';
        }
        return '../'.repeat(depth);
    }
    
    /**
     * Adjust all relative paths in the loaded HTML
     */
    function adjustPaths(html, pathPrefix) {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = html;
        
        // Adjust href attributes
        const links = tempDiv.querySelectorAll('a[href]');
        links.forEach(link => {
            const href = link.getAttribute('href');
            // Only adjust relative paths (not absolute URLs, # anchors, or mailto/tel links)
            if (href && !href.startsWith('http') && !href.startsWith('#') && 
                !href.startsWith('mailto:') && !href.startsWith('tel:') && !href.startsWith('/')) {
                link.setAttribute('href', pathPrefix + href);
            }
        });
        
        // Adjust src attributes (images, scripts, etc.)
        const sources = tempDiv.querySelectorAll('[src]');
        sources.forEach(element => {
            const src = element.getAttribute('src');
            // Only adjust relative paths
            if (src && !src.startsWith('http') && !src.startsWith('/')) {
                element.setAttribute('src', pathPrefix + src);
            }
        });
        
        return tempDiv.innerHTML;
    }
    
    /**
     * Load an include file and insert it into the target element
     */
    async function loadInclude(filename, targetId) {
        try {
            const pathPrefix = getPathPrefix();
            const includeUrl = pathPrefix + 'includes/' + filename;
            
            const response = await fetch(includeUrl);
            if (!response.ok) {
                throw new Error(`Failed to load ${filename}: ${response.status}`);
            }
            
            let html = await response.text();
            
            // Adjust paths in the loaded HTML
            html = adjustPaths(html, pathPrefix);
            
            // Insert into target
            const target = document.getElementById(targetId);
            if (target) {
                target.innerHTML = html;
                
                // Re-initialize Webflow interactions if available
                if (window.Webflow && window.Webflow.destroy) {
                    window.Webflow.destroy();
                    window.Webflow.ready();
                    window.Webflow.require('ix2').init();
                }
            } else {
                console.warn(`Target element #${targetId} not found`);
            }
        } catch (error) {
            console.error(`Error loading ${filename}:`, error);
        }
    }
    
    /**
     * Initialize the loader when DOM is ready
     */
    function init() {
        // Load header
        const headerPlaceholder = document.getElementById('header-placeholder');
        if (headerPlaceholder) {
            loadInclude('header.html', 'header-placeholder');
        }
        
        // Load Google reviews
        const reviewsPlaceholder = document.getElementById('google-reviews-placeholder');
        if (reviewsPlaceholder) {
            loadInclude('google-reviews.html', 'google-reviews-placeholder');
        }
        
        // Load footer
        const footerPlaceholder = document.getElementById('footer-placeholder');
        if (footerPlaceholder) {
            loadInclude('footer.html', 'footer-placeholder');
        }
    }
    
    // Run when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
