class Event {
  title;
  description;
  hostName;
  photoLink;

  constructor(title, description, hostName) {
    this.title = title;
    this.description = description;
    this.hostName = hostName;
    this.photoLink = null;
  }

  getTitle() {
    return this.title;
  }

  getDescription() {
    return this.description;
  }

  getHostName() {
    return this.hostName;
  }

  setPhotoLink(photoLink) {
    this.photoLink = photoLink;
  }
}
