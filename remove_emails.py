import json
import re

print("Removing remaining emails and updating references...")

# 1. Remove emails from posts.json 
with open('posts.json', 'r', encoding='utf-8') as f:
    posts_text = f.read()

email_count_posts = posts_text.count('mistrioti@gmail.com')
posts_text = posts_text.replace(' mistrioti@gmail.com', '')

with open('posts.json', 'w', encoding='utf-8') as f:
    f.write(posts_text)

print(f"✓ Removed {email_count_posts} email instances from posts.json")

# 2. Remove emails from pages.json
with open('pages.json', 'r', encoding='utf-8') as f:
    pages_text = f.read()

email_count_pages = pages_text.count('mistrioti@gmail.com')
pages_text = pages_text.replace(' mistrioti@gmail.com', '')

with open('pages.json', 'w', encoding='utf-8') as f:
    f.write(pages_text)

print(f"✓ Removed {email_count_pages} email instances from pages.json")

# 3. Verify removal
with open('posts.json', 'r', encoding='utf-8') as f:
    verify_posts = f.read()
verify_email_posts = verify_posts.count('mistrioti@gmail.com')

with open('pages.json', 'r', encoding='utf-8') as f:
    verify_pages = f.read()
verify_email_pages = verify_pages.count('mistrioti@gmail.com')

print(f"\nVerification:")
print(f"  Remaining emails in posts.json: {verify_email_posts}")
print(f"  Remaining emails in pages.json: {verify_email_pages}")

if verify_email_posts == 0 and verify_email_pages == 0:
    print("\n✅ All emails successfully removed from JSON files!")
else:
    print("\n❌ Some emails still remain")
