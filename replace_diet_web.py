import json
import os
import re

# List of files to check and modify
files_to_modify = [
    'src/lib/content.json',
    'pages.json',
    'posts.json',
]

def replace_in_file(file_path):
    """Replace Diet Web with Well Being and diet-web with well-being"""
    if not os.path.exists(file_path):
        print(f"File not found: {file_path}")
        return 0
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original_length = len(content)
    
    # Replace common variants
    new_content = content
    # textual site name occurrences
    new_content = new_content.replace('Diet Web', 'Well Being')
    new_content = new_content.replace('Diet web', 'Well Being')
    new_content = new_content.replace('diet Web', 'Well Being')
    # URLs and hostnames
    new_content = new_content.replace('https://diet-web.blogspot.com', 'https://well-being.blogspot.com')
    new_content = new_content.replace('http://diet-web.blogspot.com', 'http://well-being.blogspot.com')
    new_content = new_content.replace('diet-web.blogspot.com', 'well-being.blogspot.com')
    # path segments used in storage image names
    new_content = new_content.replace('-diet-web-blogspot-com', '-well-being-blogspot-com')
    # image filenames that contain diet-web
    new_content = new_content.replace('diet-web.jpg', 'well-being.jpg')
    new_content = new_content.replace('diet-web.png', 'well-being.png')
    new_content = new_content.replace('DIETWEB', 'WELL-BEING')
    # generic lowercase occurrences
    new_content = new_content.replace('diet-web', 'well-being')
    
    # Write back if changed
    if new_content != content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        
        replacements = (original_length - len(new_content)) // 2 + (len(new_content) - original_length)
        print(f"✓ Modified: {file_path}")
        print(f"   Changes applied successfully")
        return True
    else:
        print(f"  No changes needed in: {file_path}")
        return False

print("=" * 60)
print("Replacing 'Diet Web' with 'Well Being'")
print("=" * 60)

for file_path in files_to_modify:
    replace_in_file(file_path)

print("\n" + "=" * 60)
print("Replacement complete!")
print("=" * 60)
