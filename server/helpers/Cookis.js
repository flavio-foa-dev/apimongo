export class Cookies {

  constructor(name, value) {
    this.name = name;
    this.value = value;
  }

  setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = 'expires='+ d.toUTCString();
    document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
  }

  getCookie(cname) {
    let name = cname + '=';
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return '';
  }

  checkCookie() {
    let username = this.getCookie('username');
    if (username != '') {
      alert('Welcome again ' + username);
    } else {
      username = prompt('Please enter your name:', '');
      if (username != '' && username != null) {
        this.setCookie('username', username, 365);
      }
    }
  }

  destroy() {
    // Basta definir o parâmetro expires para uma data passada:
    // document.cookie = 'username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    document.cookie = `${this.name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
  }

  defyneCook(){
    document.cookie = `${this.name}=${this.value};path=/`;
  }

  getCookieName(){
    const result = document.cookie.split('; ')
      .find((cookie) => cookie.startsWith(`${this.name}=`))
      ?.split('=');

    return result[1];
  }

}

