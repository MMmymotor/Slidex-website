#!/usr/bin/env python3
"""
Fix orphan HTML tags after header-placeholder
Removes leftover HTML fragments between header-placeholder and the first real section
"""

import re
import glob
import os

def fix_orphan_tags(filepath):
    """Remove orphan HTML tags after header-placeholder"""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Pattern to match: header-placeholder + orphan tags + first real content
        # Look for header-placeholder followed by any HTML until we hit a <section> tag
        pattern = r'(<div id="header-placeholder"></div>)\s*(?:</nav>|</div>|</li>|<li|<a|<ul|<nav|<div class="nav-|<div class="hamburger-|<svg)[^<]*.*?(?=<section)'
        
        # Check if pattern exists
        if re.search(pattern, content, re.DOTALL):
            # Replace with clean version
            replacement = r'\1\n\n'
            new_content = re.sub(pattern, replacement, content, flags=re.DOTALL)
            
            # Write back
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            
            return True
        
        return False
        
    except Exception as e:
        print(f"Error processing {filepath}: {e}")
        return False

def main():
    # Find all HTML files (excluding specific ones)
    html_files = []
    
    # Root level HTML
    html_files.extend(glob.glob('*.html'))
    
    # Subdirectories
    for subdir in ['blog', 'kits-renovation', 'nos-produits', 'partenaires', 'regions', 'services-pages', 'realisations']:
        if os.path.isdir(subdir):
            html_files.extend(glob.glob(f'{subdir}/*.html'))
    
    # Exclude certain files
    exclude_files = ['connexion-inscription.html', '401.html', '404.html']
    html_files = [f for f in html_files if os.path.basename(f) not in exclude_files]
    
    fixed_count = 0
    
    for filepath in html_files:
        if fix_orphan_tags(filepath):
            fixed_count += 1
            print(f"✓ Fixed: {filepath}")
    
    print(f"\nFixed {fixed_count} files with orphan tags")

if __name__ == '__main__':
    main()
