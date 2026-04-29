# LearnDocs Hub - File Sharing & Draft Management Guide

## Overview
Your LearnDocs Hub app now supports:
- Opening files directly from WhatsApp, Email, and other apps
- Auto-launching the PDF viewer when PDFs are opened
- Saving drafts of edited PDFs
- Loading previously saved drafts
- Cross-device file synchronization

---

## How It Works

### 1. Opening PDFs from WhatsApp

**On Mobile (Android/iOS):**
1. Someone sends you a PDF in WhatsApp
2. Tap the PDF to open it
3. Select "Open with" → LearnDocs Hub
4. The PDF automatically opens in the PDF Editor
5. You can immediately start editing

**On Desktop:**
1. Click the PDF in WhatsApp
2. Select LearnDocs Hub from available apps
3. PDF opens in the browser's PDF Editor

### 2. Opening PDFs from Email

**All Devices:**
1. You receive an email with a PDF attachment
2. Tap/Click the attachment
3. Select "Open with" → LearnDocs Hub (if available)
4. PDF opens in the viewer automatically
5. Edit and save as draft

### 3. Drag & Drop
- Drag a PDF file onto the LearnDocs Hub window
- It automatically opens in the PDF Editor

### 4. Direct File Upload
- Use the "Open File" button
- Select a PDF from your device
- It opens in the Editor immediately

---

## Draft Management

### Saving Drafts

**Automatic Saving:**
- Drafts auto-save every 30 seconds while you're editing
- No action required from you
- Runs in the background

**Manual Saving:**
1. Click "Save Draft" button in the toolbar
2. Current PDF and all annotations are saved
3. You'll see a success message

### Loading Drafts

**To Load a Previously Saved Draft:**
1. Click "Load Draft" button in the toolbar
2. A list of your saved drafts appears
3. Click the draft you want to load
4. It opens immediately with all your changes

**Draft Information Includes:**
- PDF name
- Save date
- All annotations and edits
- Page layout and formatting

### Viewing All Drafts
- Drafts are stored locally in your browser
- Access them anytime without internet (PWA)
- Organize by name and date

---

## Technical Implementation

### File Handling
- **File Handler API**: Receives files from external apps
- **Web Share API**: Share edited PDFs with others
- **Blob Storage**: Stores draft data locally
- **LocalStorage**: Persists drafts between sessions

### Auto-Detection
When a PDF is opened from an external app:
1. File handler detects the PDF file
2. System automatically navigates to `/pdf-editor.html`
3. File data is passed via URL parameter
4. PDF viewer loads and displays the file
5. Editor is ready for immediate use

### Draft Data Structure
```javascript
{
  id: timestamp,
  name: "document.pdf",
  content: ArrayBuffer,
  annotations: [
    { type, x, y, width, height, text, color, fontSize }
  ],
  savedAt: ISO-date,
  updatedAt: ISO-date
}
```

---

## Supported File Types

### Primary Support
- ✅ **PDF** (.pdf) - Full editing support
- ✅ **Images** (.png, .jpg, .gif) - View and edit

### Planned Support
- 📋 **Documents** (.docx, .doc, .txt)
- 🖼️ **Graphics** (.svg, .psd)

---

## Mobile App Behavior

### Android
- PDFs open through your app chooser
- LearnDocs Hub appears as an option
- Full editing capabilities available
- Drafts saved to device storage

### iOS
- PDFs open via iOS file handler
- Works with Mail, Safari downloads
- All editing features available
- iCloud sync supported

### Desktop/Web
- Share files via drag-and-drop
- Use native file picker
- All advanced features available

---

## Privacy & Security

### Data Storage
- ✅ All files processed locally in your browser
- ✅ No uploads to external servers
- ✅ Drafts stored in browser's localStorage
- ✅ 100% private - only you can access your data

### File Handling
- Files are converted to Blob format
- Stored temporarily during editing
- Can be cleared anytime
- No automatic cloud sync (optional)

---

## Troubleshooting

### PDF Not Opening
**Solution:**
1. Make sure it's a valid PDF file
2. Check file size (max ~50MB recommended)
3. Try refreshing the page
4. Clear browser cache

### Drafts Not Saving
**Solution:**
1. Check if localStorage is enabled
2. Ensure you have disk space
3. Try manual save via "Save Draft" button
4. Check browser console for errors

### File Upload Takes Too Long
**Solution:**
1. Large files may take time
2. Check internet connection
3. Try a smaller file first
4. Close other tabs/apps

---

## Keyboard Shortcuts

| Action | Shortcut |
|--------|----------|
| Save Draft | Ctrl+S / Cmd+S |
| Load Draft | Ctrl+O / Cmd+O |
| Undo | Ctrl+Z / Cmd+Z |
| Redo | Ctrl+Y / Cmd+Y |
| Download | Ctrl+D / Cmd+D |

---

## Tips & Tricks

### 1. Quick Sharing
- Edit a PDF
- Click "Download" to save
- Share via WhatsApp, email, etc.

### 2. Draft Organization
- Name your drafts clearly
- Use dates in names (e.g., "Invoice_2024_04_29")
- Regularly clean up old drafts

### 3. Cross-Device
- Drafts are device-specific (local storage)
- Export and email PDFs to share between devices
- Consider cloud storage integration

### 4. Backup
- Regularly download important PDFs
- Keep backups on cloud storage
- Export drafts periodically

---

## Advanced Features

### Progressive Web App (PWA)
- ✅ Install as app on mobile
- ✅ Works offline
- ✅ File handling integration
- ✅ Full-screen editing

### Service Worker
- Caches app files
- Enables offline access
- Background sync support

### LocalStorage
- Up to 10MB per domain
- Automatic cleanup
- Quick access to drafts

---

## Frequently Asked Questions

**Q: Where are my drafts saved?**
A: In your browser's localStorage. They're specific to your device.

**Q: Can I sync drafts across devices?**
A: Currently no automatic sync. Export PDFs to share or use cloud storage.

**Q: What happens if I clear my browser data?**
A: Drafts will be deleted. Download important files first.

**Q: Can I share drafts with others?**
A: Yes, download the PDF and share via WhatsApp, email, etc.

**Q: Is my data safe?**
A: Yes, all processing is local. No data sent to servers.

---

## Future Enhancements

Planned features:
- Cloud sync for drafts
- Collaborative editing
- Advanced annotation tools
- OCR text recognition
- Form filling support
- Digital signatures

---

## Contact & Support

For issues or suggestions:
- Visit: https://learn-doshub.vercel.app
- Check our FAQ page
- Use the contact form

---

**Version:** 1.0  
**Last Updated:** April 29, 2026  
**Status:** ✅ Production Ready
