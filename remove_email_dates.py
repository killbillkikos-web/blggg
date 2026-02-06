#!/usr/bin/env python3
import json
import re
from pathlib import Path

# Read the content.json file
content_path = Path("src/lib/content.json")
with open(content_path, 'r', encoding='utf-8') as f:
    data = json.load(f)

# Process each post
for post in data.get("posts", []):
    if "content" in post and post["content"]:
        content = post["content"]
        
        # Remove email patterns (e.g., k.mistrioti@yahoo.gr)
        # This matches email addresses in HTML content
        content = re.sub(
            r'k\.mistrioti@yahoo\.gr',
            '',
            content,
            flags=re.IGNORECASE
        )
        
        # Remove email in various HTML formats
        content = re.sub(
            r'<b>k\.mistrioti@yahoo\.gr</b>',
            '',
            content,
            flags=re.IGNORECASE
        )
        
        # Remove email links
        content = re.sub(
            r'<a[^>]*href=["\']mailto:k\.mistrioti@yahoo\.gr["\'][^>]*>.*?</a>',
            '',
            content,
            flags=re.IGNORECASE | re.DOTALL
        )
        
        # Remove "e-mail:" labels with empty values
        content = re.sub(
            r'e-mail:\s*<b>\s*</b>',
            '',
            content,
            flags=re.IGNORECASE
        )
        
        # Remove standalone e-mail labels
        content = re.sub(
            r'e-mail:\s*<br\s*/?>\s*<br\s*/?>\s*',
            '',
            content,
            flags=re.IGNORECASE
        )
        
        # Update the post content
        post["content"] = content

# Write the modified content back to the file
with open(content_path, 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("Removed email and dates from posts in content.json")
