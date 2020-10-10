export class ProfileHandler {
  private readonly profile: Profile;
  private readonly elementIds = ['profile', 'avatar', 'name'];

  constructor(profile: Profile) {
    this.profile = profile;
  }

  element(element: Element) {
    if (!element) {
      return;
    }

    const id = element.getAttribute('id');
    switch (id) {
      case 'profile':
        this.transformProfileContainer(element);
        break;
      case 'avatar':
        this.transformAvatarImage(element);
        break;
      case 'name':
        this.transformUsernameHeader(element);
        break;
      default: break;
    }

  }

  transformProfileContainer(element: Element) {
    element.removeAttribute('style');
  }

  transformAvatarImage(element: Element) {
    element.setAttribute('src', this.profile.avatar);
  }

  transformUsernameHeader(element: Element) {
    element.setInnerContent(this.profile.name);
  }
}

export type Profile = {
  name: string,
  avatar: string
}
