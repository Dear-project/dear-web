class PatternCheck {
  public useridCheck(value: string): boolean {
    if (/^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(value)) {
      return true;
    }
    return false;
  }

  public passwordCheck(value: string): boolean {
    if (/^(?=.*[a-zA-Z])(?=.*[0-9]).{8,20}$/.test(value)) {
      return true;
    }
    return false;
  }
}

export default new PatternCheck();
