# schemas/auth.py
from pydantic import BaseModel, EmailStr, Field
from typing import Optional

# ============ OTP-BASED AUTH ============

class SignupOTPInitRequest(BaseModel):
    """Initial signup request with OTP"""
    username: str = Field(min_length=3)
    email: EmailStr
    password: str = Field(min_length=6)

class SignupOTPRequest(BaseModel):
    """Verify OTP for signup"""
    email: EmailStr
    otp: str

class LoginOTPRequest(BaseModel):
    """Login with OTP using email"""
    email: EmailStr
    password: str

class OTPVerifyRequest(BaseModel):
    """Generic OTP verification"""
    email: EmailStr
    otp: str
