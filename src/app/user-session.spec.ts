import {UserSession} from "./user-session";

describe('UserSession', () => {
  it('should create an instance', () => {
    expect(new UserSession()).toBeTruthy();
  });

  it('should accespt values in the constructor', () => {
    let userSession = new UserSession({
      sessionId: '1',
      operatingSystem: 'Win10',
      language: 'de',
      browser: 'Chrome',
      location: '192.168.1.1',
      referrer: 'google.ch'
    });
    expect(userSession.sessionId).toEqual('1');
    expect(userSession.operatingSystem).toEqual('Win10');
    expect(userSession.language).toEqual('de');
    expect(userSession.browser).toEqual('Chrome');
    expect(userSession.location).toEqual('192.168.1.1');
    expect(userSession.referrer).toEqual('google.ch');
  })
});
