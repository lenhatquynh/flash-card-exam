/**
 * Input rules for the account forms.
 *
 * The rules are shared by the client and the server so the form can reject
 * bad input before it is sent and the server never has to trust it.
 */

/** Usernames are letters, digits and underscores. */
export const USERNAME_PATTERN = /^[a-zA-Z0-9_]{3,32}$/

/** The shortest password the app accepts. */
export const MIN_PASSWORD_LENGTH = 8

/** Checks a username against the rules. Returns an error message, or null. */
export function validateUsername(username: string): string | null {
  if (username.length < 3) {
    return 'Your username needs at least 3 characters.'
  }
  if (username.length > 32) {
    return 'Your username can be at most 32 characters.'
  }
  if (!USERNAME_PATTERN.test(username)) {
    return 'Use only letters, digits and underscores in your username.'
  }
  return null
}

/** Checks a password against the rules. Returns an error message, or null. */
export function validatePassword(password: string): string | null {
  if (password.length < MIN_PASSWORD_LENGTH) {
    return `Your password needs at least ${MIN_PASSWORD_LENGTH} characters.`
  }
  if (password.length > 200) {
    return 'Your password is too long.'
  }
  return null
}
