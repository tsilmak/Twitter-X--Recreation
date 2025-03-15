package com.twitter_X_Recreation.twitter_X.exceptions;

public class VerificationCodeExpiredException extends RuntimeException {
  public VerificationCodeExpiredException(String message) {
    super(message);
  }
}
