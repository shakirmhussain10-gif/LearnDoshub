#!/bin/bash

# Update SEO meta tags for all pages

# PDF Tools
perl -i -pe 's/<meta property="og:title" content="PDF Tools \| LearnDocs Hub">/<meta property="og:title" content="Free PDF Tools - Merge, Split, Compress \& Edit | LearnDocs Hub">/g' pdf-tools.html
perl -i -pe 's/<meta property="og:description" content="Free online PDF tools: merge, split, compress\. 100% free!">/<meta property="og:description" content="Professional PDF tools: merge, split, compress, convert formats, watermark, protect. Free, fast, and secure - all processing in your browser.">/g' pdf-tools.html
perl -i -pe 's/<meta name="twitter:title" content="PDF Tools \| LearnDocs Hub">/<meta name="twitter:title" content="Free PDF Tools - Merge, Split, Compress \& Edit">/g' pdf-tools.html
perl -i -pe 's/<meta name="twitter:description" content="Free PDF tools: merge, split, compress\. 100% free!">/<meta name="twitter:description" content="Professional PDF tools: merge, split, compress, and more. Free and secure.">/g' pdf-tools.html

# Image Tools
perl -i -pe 's/<meta property="og:title" content="Image Tools \| LearnDocs Hub">/<meta property="og:title" content="Free Image Tools - Resize, Compress, Convert \& Edit | LearnDocs Hub">/g' image-tools.html
perl -i -pe 's/<meta property="og:description" content="Free image tools: resize, compress, convert\. 100% free!">/<meta property="og:description" content="Professional image tools: resize, compress, convert formats, remove background. Free, fast, and secure processing.">/g' image-tools.html
perl -i -pe 's/<meta name="twitter:title" content="Image Tools \| LearnDocs Hub">/<meta name="twitter:title" content="Free Image Tools - Resize, Compress, Convert \& Edit">/g' image-tools.html
perl -i -pe 's/<meta name="twitter:description" content="Free image tools: resize, compress, convert\. 100% free!">/<meta name="twitter:description" content="Professional image tools: resize, compress, convert. Free and secure.">/g' image-tools.html

# Text Tools
perl -i -pe 's/<meta property="og:title" content="Text Tools \| LearnDocs Hub">/<meta property="og:title" content="Free Text Tools - Format, Convert \& Analyze | LearnDocs Hub">/g' text-tools.html
perl -i -pe 's/<meta property="og:description" content="Free text tools: case converter, word counter, JSON formatter\. 100% free!">/<meta property="og:description" content="Professional text tools: format, convert, analyze. Word counter, JSON formatter, regex tester, password generator and more.">/g' text-tools.html
perl -i -pe 's/<meta name="twitter:title" content="Text Tools \| LearnDocs Hub">/<meta name="twitter:title" content="Free Text Tools - Format, Convert \& Analyze">/g' text-tools.html
perl -i -pe 's/<meta name="twitter:description" content="Free text tools: case converter, word counter, JSON formatter\. 100% free!">/<meta name="twitter:description" content="Professional text tools: format, convert, analyze. Free and secure.">/g' text-tools.html

# Audio Tools
perl -i -pe 's/<meta property="og:title" content="Audio Tools \| LearnDocs Hub">/<meta property="og:title" content="Free Audio Tools - Convert, Trim \& Process | LearnDocs Hub">/g' audio-tools.html
perl -i -pe 's/<meta property="og:description" content="Free audio tools: convert, trim, merge\. 100% free!">/<meta property="og:description" content="Professional audio tools: convert formats, trim, merge, adjust volume. Free and secure audio processing.">/g' audio-tools.html
perl -i -pe 's/<meta name="twitter:title" content="Audio Tools \| LearnDocs Hub">/<meta name="twitter:title" content="Free Audio Tools - Convert, Trim \& Process">/g' audio-tools.html
perl -i -pe 's/<meta name="twitter:description" content="Free audio tools: convert, trim, merge\. 100% free!">/<meta name="twitter:description" content="Professional audio tools: convert, trim, merge. Free and secure.">/g' audio-tools.html

# Video Tools
perl -i -pe 's/<meta property="og:title" content="Video Tools \| LearnDocs Hub">/<meta property="og:title" content="Free Video Tools - Convert, Compress \& Edit | LearnDocs Hub">/g' video-tools.html
perl -i -pe 's/<meta property="og:description" content="Free video tools: convert, compress, trim\. 100% free!">/<meta property="og:description" content="Professional video tools: convert formats, compress, trim, edit. Free and secure video processing.">/g' video-tools.html
perl -i -pe 's/<meta name="twitter:title" content="Video Tools \| LearnDocs Hub">/<meta name="twitter:title" content="Free Video Tools - Convert, Compress \& Edit">/g' video-tools.html
perl -i -pe 's/<meta name="twitter:description" content="Free video tools: convert, compress, trim\. 100% free!">/<meta name="twitter:description" content="Professional video tools: convert, compress, trim. Free and secure.">/g' video-tools.html

# Business Tools
perl -i -pe 's/<meta property="og:title" content="Business Tools \| LearnDocs Hub">/<meta property="og:title" content="Free Business Tools - Invoice, Resume, Receipt Generator | LearnDocs Hub">/g' business-tools.html
perl -i -pe 's/<meta property="og:description" content="Free business tools: invoice generator, resume builder, receipt maker\. 100% free!">/<meta property="og:description" content="Professional business tools: invoice generator, resume builder, receipt maker, letter writer. Free document creation tools.">/g' business-tools.html
perl -i -pe 's/<meta name="twitter:title" content="Business Tools \| LearnDocs Hub">/<meta name="twitter:title" content="Free Business Tools - Invoice, Resume, Receipt Generator">/g' business-tools.html
perl -i -pe 's/<meta name="twitter:description" content="Free business tools: invoice generator, resume builder, receipt maker\. 100% free!">/<meta name="twitter:description" content="Professional business tools: invoice, resume, receipt. Free document creation.">/g' business-tools.html

# Social Tools
perl -i -pe 's/<meta property="og:title" content="Social Tools \| LearnDocs Hub">/<meta property="og:title" content="Free Social Media Tools - QR Code, Link Shortener | LearnDocs Hub">/g' social-tools.html
perl -i -pe 's/<meta property="og:description" content="Free social tools: QR code generator, link shortener, hashtag analyzer\. 100% free!">/<meta property="og:description" content="Professional social media tools: QR code generator, link shortener, hashtag analyzer. Free social media utilities.">/g' social-tools.html
perl -i -pe 's/<meta name="twitter:title" content="Social Tools \| LearnDocs Hub">/<meta name="twitter:title" content="Free Social Media Tools - QR Code, Link Shortener">/g' social-tools.html
perl -i -pe 's/<meta name="twitter:description" content="Free social tools: QR code generator, link shortener, hashtag analyzer\. 100% free!">/<meta name="twitter:description" content="Professional social media tools: QR code, link shortener. Free utilities.">/g' social-tools.html

# Calculators
perl -i -pe 's/<meta property="og:title" content="Calculators \| LearnDocs Hub">/<meta property="og:title" content="Free Online Calculators - Math, Percent, Unit Converter | LearnDocs Hub">/g' calculators.html
perl -i -pe 's/<meta property="og:description" content="Free calculators: percentage, unit converter, scientific calculator\. 100% free!">/<meta property="og:description" content="Professional calculators: math, percentage, unit converter, scientific. Free online calculation tools.">/g' calculators.html
perl -i -pe 's/<meta name="twitter:title" content="Calculators \| LearnDocs Hub">/<meta name="twitter:title" content="Free Online Calculators - Math, Percent, Unit Converter">/g' calculators.html
perl -i -pe 's/<meta name="twitter:description" content="Free calculators: percentage, unit converter, scientific calculator\. 100% free!">/<meta name="twitter:description" content="Professional calculators: math, percent, unit conversion. Free tools.">/g' calculators.html

# Chat
perl -i -pe 's/<meta property="og:title" content="AI Chat \| LearnDocs Hub">/<meta property="og:title" content="Free AI Chat Assistant - Ask Anything | LearnDocs Hub">/g' chat.html
perl -i -pe 's/<meta property="og:description" content="Free AI Chat Assistant - ask anything, get instant answers\. 100% free!">/<meta property="og:description" content="Free AI Chat Assistant: ask anything and get instant intelligent responses. No registration needed.">/g' chat.html
perl -i -pe 's/<meta name="twitter:title" content="AI Chat \| LearnDocs Hub">/<meta name="twitter:title" content="Free AI Chat Assistant - Ask Anything">/g' chat.html
perl -i -pe 's/<meta name="twitter:description" content="Free AI Chat Assistant - ask anything, get instant answers\. 100% free!">/<meta name="twitter:description" content="Free AI Chat Assistant: instant answers to your questions. No registration needed.">/g' chat.html

# FAQ
perl -i -pe 's/<meta property="og:title" content="FAQ \| LearnDocs Hub">/<meta property="og:title" content="Frequently Asked Questions | LearnDocs Hub">/g' faq.html
perl -i -pe 's/<meta property="og:description" content="Frequently asked questions about LearnDocs Hub and our free tools">/<meta property="og:description" content="Get answers to frequently asked questions about LearnDocs Hub, our tools, privacy, and security.">/g' faq.html
perl -i -pe 's/<meta name="twitter:title" content="FAQ \| LearnDocs Hub">/<meta name="twitter:title" content="Frequently Asked Questions">/g' faq.html
perl -i -pe 's/<meta name="twitter:description" content="Frequently asked questions about LearnDocs Hub and our free tools">/<meta name="twitter:description" content="Get answers to frequently asked questions about LearnDocs Hub.">/g' faq.html

# About
perl -i -pe 's/<meta property="og:title" content="About LearnDocs Hub">/<meta property="og:title" content="About LearnDocs Hub - Free Tools Platform">/g' about.html
perl -i -pe 's/<meta property="og:description" content="Learn more about LearnDocs Hub and our mission to provide free tools">/<meta property="og:description" content="LearnDocs Hub provides free online tools for productivity, content creation, and document processing.">/g' about.html
perl -i -pe 's/<meta name="twitter:title" content="About LearnDocs Hub">/<meta name="twitter:title" content="About LearnDocs Hub - Free Tools Platform">/g' about.html
perl -i -pe 's/<meta name="twitter:description" content="Learn more about LearnDocs Hub and our mission to provide free tools">/<meta name="twitter:description" content="LearnDocs Hub: free tools for everyone. Our mission and values.">/g' about.html

# Contact
perl -i -pe 's/<meta property="og:title" content="Contact Us \| LearnDocs Hub">/<meta property="og:title" content="Contact LearnDocs Hub - Get in Touch">/g' contact.html
perl -i -pe 's/<meta property="og:description" content="Contact LearnDocs Hub for feedback, bug reports, or feature requests">/<meta property="og:description" content="Get in touch with LearnDocs Hub team. Send us feedback, bug reports, or feature requests.">/g' contact.html
perl -i -pe 's/<meta name="twitter:title" content="Contact Us \| LearnDocs Hub">/<meta name="twitter:title" content="Contact LearnDocs Hub">/g' contact.html
perl -i -pe 's/<meta name="twitter:description" content="Contact LearnDocs Hub for feedback, bug reports, or feature requests">/<meta name="twitter:description" content="Contact LearnDocs Hub. We\x27d love to hear from you.">/g' contact.html

echo "✅ All meta tags updated successfully!"
