#!/usr/bin/env python3
import os
import re

# Crisp script to add
CRISP_SCRIPT = '''<script type="text/javascript">window.$crisp=[];window.CRISP_WEBSITE_ID="28263fbc-fd1c-4adc-8204-571acc2440a4";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();</script>
</head>'''

# Get all HTML files
html_files = []
for root, dirs, files in os.walk('.'):
    for file in files:
        if file.endswith('.html') and not file.endswith('.bak'):
            html_files.append(os.path.join(root, file))

print(f"Found {len(html_files)} HTML files")

success_count = 0
skip_count = 0
error_count = 0

for html_file in html_files:
    try:
        with open(html_file, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if Crisp is already present
        if 'CRISP_WEBSITE_ID' in content:
            print(f"⏭️  Skipped (already has Crisp): {html_file}")
            skip_count += 1
            continue
        
        # Replace </head> with Crisp script + </head>
        if '</head>' in content:
            new_content = content.replace('</head>', CRISP_SCRIPT)
            
            with open(html_file, 'w', encoding='utf-8') as f:
                f.write(new_content)
            
            print(f"✅ Updated: {html_file}")
            success_count += 1
        else:
            print(f"⚠️  No </head> tag found: {html_file}")
            error_count += 1
    
    except Exception as e:
        print(f"❌ Error with {html_file}: {str(e)}")
        error_count += 1

print(f"\n{'='*50}")
print(f"✅ Successfully updated: {success_count} files")
print(f"⏭️  Skipped (already had Crisp): {skip_count} files")
print(f"❌ Errors: {error_count} files")
print(f"{'='*50}")
