package com.twitter_X_Recreation.twitter_X.exceptions;

public class IncorrectVerificationCodeException extends RuntimeException {
  public IncorrectVerificationCodeException(String message) {
    super(message);
  }
}
