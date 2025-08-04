from flask import Flask, render_template, jsonify
import re

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/services')
def services():
    return render_template('services.html')

@app.route('/downloads')
def downloads():
    return render_template('downloads.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')

@app.route('/marriage-details')
def marriage_details():
    return render_template('marriage-details.html')

@app.route('/property-registration')
def property_registration():
    return render_template('property-registration.html')


@app.route('/api/fy-news')
def fy_news():
    try:
        url = 'https://registration.telangana.gov.in/index.htm'
        resp = requests.get(url, timeout=10)
        text = resp.text
        # FY 2025-26 Non-Agriculture extraction
        fy_match = re.search(r'FY 2025-26[\s\S]*?As on ([^<\n]+)[\s\S]*?\(Non-Agriculture\)[\s\S]*?(\d{5,6})[\s\S]*?Document Registrations', text, re.I)
        fy_date = fy_count = None
        if fy_match:
            fy_date = fy_match.group(1).strip()
            fy_count = fy_match.group(2)
        # News & Events extraction
        news_section = re.search(r'News & Events([\s\S]*?)(?:##|</body>|Additional Links)', text, re.I)
        news_items = []
        allowed_keywords = [
            'stamp duty',
            'jagraththa',
            'property purchase',
            'registration process',
            'brokers',
            'middlemen',
            'complaint',
            'android',
            'mobile app',
            'enquiries',
        ]
        exclude_phrases = [
            'New Whatsapp No:',
            'New email ID',
            "For any guidance & grievance, please mail us on 'grievance-igrs@igrs.telangana.gov.in'",
            'WhatsApp',
            'CONTACT US',
            'Contact us image',
        ]
        if news_section:
            section = news_section.group(1)
            # Links
            for m in re.finditer(r'([^\n\r\[\]]+?)\s*\[Click here\]\(([^\)]+)\)', section):
                title = m.group(1).replace('\n', ' ').strip()
                url = m.group(2).strip()
                if any(kw in title.lower() for kw in allowed_keywords) and not any(ex.lower() in title.lower() for ex in exclude_phrases):
                    news_items.append({'title': title, 'url': url})
            # Plain text (try to find a link in the next line if present)
            lines = re.split(r'\n|<br\s*/?>', section)
            i = 0
            while i < len(lines):
                line = lines[i].strip()
                if line and not re.search(r'\[Click here\]', line) and len(line) > 3:
                    if any(kw in line.lower() for kw in allowed_keywords) and not any(ex.lower() in line.lower() for ex in exclude_phrases):
                        # Check if next line is a link
                        url = None
                        if i + 1 < len(lines):
                            next_line = lines[i+1].strip()
                            url_match = re.match(r'^(https?://[^\s]+)$', next_line)
                            if url_match:
                                url = url_match.group(1)
                                i += 1  # Skip the link line
                        if not any(line in n['title'] for n in news_items):
                            news_items.append({'title': line, 'url': url})
                i += 1
        return jsonify({
            'fy_date': fy_date,
            'fy_count': fy_count,
            'news': news_items
        })
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)