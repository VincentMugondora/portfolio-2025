export async function createUpload(req, res) {
  try {
    if (!req.file) return res.status(400).json({ message: 'file required' })

    const { mimetype, size, filename } = req.file
    const isImage = mimetype.startsWith('image/')

    // Enforce 10MB max for images
    const TEN_MB = 10 * 1024 * 1024
    if (isImage && size > TEN_MB) {
      return res.status(400).json({ message: 'Image file too large (max 10MB)' })
    }

    const url = `/uploads/files/${filename}`
    return res.status(201).json({ url, filename, mimeType: mimetype, size })
  } catch (err) {
    console.error('Upload error', err)
    return res.status(500).json({ message: 'Upload failed' })
  }
}
