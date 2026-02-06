import json

with open('src/lib/content.json', 'r', encoding='utf-8') as f:
    content = json.load(f)

# Find all instances of 'Diet Web' in article content
diet_web_count = 0
articles_with_diet_web = []

for post in content.get('posts', []):
    content_text = post.get('content', '')
    if 'Diet Web' in content_text:
        diet_web_count += content_text.count('Diet Web')
        articles_with_diet_web.append({
            'title': post.get('title', 'Unknown'),
            'count': content_text.count('Diet Web')
        })

for page in content.get('pages', []):
    content_text = page.get('content', '')
    if 'Diet Web' in content_text:
        diet_web_count += content_text.count('Diet Web')
        articles_with_diet_web.append({
            'title': page.get('title', 'Unknown'),
            'count': content_text.count('Diet Web')
        })

print(f'Total Diet Web instances in article content: {diet_web_count}')
print(f'Articles containing Diet Web: {len(articles_with_diet_web)}')
print()
for article in articles_with_diet_web:
    print(f'  - {article["title"]}: {article["count"]} instances')
