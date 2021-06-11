function isEqual(objOne, objTwo) {
	if(JSON.stringify(objOne)===JSON.stringify(objTwo)){
		return true
	} else {
		return false;
	}
}
console.log(
  isEqual(
    {
      name: "Jason",
      phone: "9853759720",
      email: "jason@edabit.com"
    },
    {
      name: "Jason",
      phone: "9853759720",
      email: "jason@edabit.com"
    }
  )
);
/* Objects are not like arrays or strings. So simply comparing by using "===" or "==" is not possible. Here to compare we have to first stringify the object and then using equality operators it is possible to compare the objects.  */