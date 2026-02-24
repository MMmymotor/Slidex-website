#!/usr/bin/env python3
"""
Update all HTML files to use centralized header/footer system.
This script:
1. Finds all HTML files in the site
2. Replaces existing headers with <div id="header-placeholder"></div>
3. Replaces existing footers with <div id="footer-placeholder"></div>
4. Adds the includes-loader.js script reference
"""

import os
import re
from pathlib import Path

# Files and folders to exclude
EXCLUDE_FILES = {
    'connexion-inscription.html',
    '401.html', 
    '404.html'
}

EXCLUDE_DIRS = {
    'includes',
    'template-pages',
    'utility-pages',
    'contact-pages',
    'blog-pages',
    'shop-pages',
    'service',
    'product',
    'blog'  # Exclude specific blog post files, not the blog folder index
}

def should_process_file(filepath):
    """Check if a file should be processed"""
    filename = os.path.basename(filepath)
    
    # Skip files in exclude list
    if filename in EXCLUDE_FILES:
        return False
    
    # Skip files in excluded directories
    path_parts = Path(filepath).parts
    for excluded_dir in EXCLUDE_DIRS:
        if excluded_dir in path_parts:
            return False
    
    return True

def find_html_files(root_dir):
    """Find all HTML files to process"""
    html_files = []
    
    for root, dirs, files in os.walk(root_dir):
        # Skip excluded directories
        dirs[:] = [d for d in dirs if d not in EXCLUDE_DIRS]
        
        for file in files:
            if file.endswith('.html'):
                filepath = os.path.join(root, file)
                if should_process_file(filepath):
                    html_files.append(filepath)
    
    return html_files

def update_html_file(filepath):
    """Update a single HTML file to use centralized header/footer"""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        modified = False
        
        # Check if already using includes system
        if 'header-placeholder' in content and 'footer-placeholder' in content:
            print(f"  ⏩ Already using includes system: {filepath}")
            return False
        
        # Replace header
        # Pattern: Find <div class="header-wrapper w-nav"...> to its closing </div>
        header_pattern = r'<div class="header-wrapper w-nav"[^>]*>.*?</div>\s*</div>\s*</div>'
        header_replacement = '<div id="header-placeholder"></div>'
        
        if re.search(header_pattern, content, re.DOTALL):
            content = re.sub(header_pattern, header_replacement, content, count=1, flags=re.DOTALL)
            modified = True
            print(f"  ✓ Replaced header in: {filepath}")
        
        # Replace footer
        # Pattern: Find <footer class="footer-v2"...> to </footer>
        footer_pattern = r'<footer class="footer-v2[^>]*>.*?</footer>'
        footer_replacement = '<div id="footer-placeholder"></div>'
        
        if re.search(footer_pattern, content, re.DOTALL):
            content = re.sub(footer_pattern, footer_replacement, content, count=1, flags=re.DOTALL)
            modified = True
            print(f"  ✓ Replaced footer in: {filepath}")
        
        # Add includes-loader.js script if not present
        if 'includes-loader.js' not in content:
            # Determine the correct path prefix for this file
            depth = len(Path(filepath).relative_to('.').parts) - 1
            path_prefix = '../' * depth if depth > 0 else ''
            
            script_tag = f'\n<script src="{path_prefix}js/includes-loader.js" type="text/javascript"></script>'
            
            # Insert before </head>
            content = content.replace('</head>', f'{script_tag}\n</head>')
            modified = True
            print(f"  ✓ Added includes-loader.js to: {filepath}")
        
        # Write back if modified
        if modified and content != original_content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        
        return False
        
    except Exception as e:
        print(f"  ✗ Error processing {filepath}: {e}")
        return False

def main():
    """Main function"""
    print("🔧 Updating HTML files to use centralized header/footer system...\n")
    
    # Get current directory
    root_dir = '.'
    
    # Find all HTML files
    html_files = find_html_files(root_dir)
    print(f"Found {len(html_files)} HTML files to process\n")
    
    # Update each file
    updated_count = 0
    for filepath in html_files:
        if update_html_file(filepath):
            updated_count += 1
    
    print(f"\n✅ Done! Updated {updated_count} files")
    print(f"\n📝 Summary:")
    print(f"  - Header/footer extracted to includes/ folder")
    print(f"  - JavaScript loader created at js/includes-loader.js")
    print(f"  - {updated_count} HTML files updated to use centralized system")
    print(f"\n🚀 Next step: Test the site locally and deploy!")

if __name__ == '__main__':
    main()
