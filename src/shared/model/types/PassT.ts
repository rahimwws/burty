type PassT = {
   id: string
   createdAt: string
   email: string
   userId: string
   medias: {
      id: string
      fileName: string
      filePath: string
      mediaType: string
      mimeType: string
      originalName: string
      size: string
   }[]
}

export default PassT;