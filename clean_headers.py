#!/usr/bin/env python3
"""
Clean up extra closing div tags after header-placeholder
"""

import os
import re
from pathlib import Path

def clean_header_placeholder(filepath):
    """Remove extra closing divs after header-placeholder"""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Pattern: header-placeholder followed by multiple closing divs
        # Replace with just header-placeholder and a newline
        pattern = r'(<div id="header-placeholder"></div>)\s*(?:</div>\s*){1,}'
        replacement = r'\1\n'
        
        content = re.sub(pattern, replacement, content)
        
        if content != original_content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"✓ Cleaned: {filepath}")
            return True
        return False
        
    except Exception as e:
        print(f"✗ Error: {filepath} - {e}")
        return False

def main():
    """Main function"""
    print("🧹 Cleaning up header-placeholder formatting...\n")
    
    # Find all HTML files
    html_files = []
    for root, dirs, files in os.walk('.'):
        # Skip some directories
        if any(skip in root for skip in ['includes', 'template-pages', 'utility-pages']):
            continue
        for file in files:
            if file.endswith('.html'):
                html_files.append(os.path.join(root, file))
    
    cleaned = 0
    for filepath in html_files:
        if clean_header_placeholder(filepath):
            cleaned += 1
    
    print(f"\n✅ Done! Cleaned {cleaned} files")

if __name__ == '__main__':
    main()
