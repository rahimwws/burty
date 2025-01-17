type LoginResponseDto = {
   message: string
   user: {
      id: string
      email: string
      role?: "USER" | "MENTOR"
      firstName: string
      lastName: string
   },
   accessToken: string
   refreshToken: string
}

export default LoginResponseDto;