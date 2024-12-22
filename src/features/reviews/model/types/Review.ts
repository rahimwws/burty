type ReviewT = {
   id: string
   comment: string
   rating: number
   user: {
      id: string
      email: string
      role: string
      firstName: string
      lastName: string
      lastLoginTime: string
      media: {
         id: string
         fileName: string
         filePath: string
         mediaType: string
         mimeType: string
         originalName: string
         size: string
      }
   }
}

export default ReviewT;
