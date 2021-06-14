function askPassword(ok, fail) {
  let password = prompt("Password?", '');
  if (password == "rockstar") ok();
  else fail();
}
let user = {
  name: 'John',

  login(result) {
    console.log( this.name + (result ? ' logged in' : ' failed to log in') );
  }
};
// askPassword(() => user.login(true), () => user.login(false)); //using wrapper function or arrow
//it will work but it’s a bit less reliable though in more complex situations where user variable might change after askPassword is called, but before the visitor answers and calls () => user.loginOk(true/false).
askPassword(user.login.bind(user, true), user.login.bind(user, false));