const users = {
    1: {
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
      },
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
      company: {
        catchPhrase: "Multi-layered client-server neural-net",
  
      }
    },
    2: {
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv",
      address: {
        street: "Victor Plains",
        suite: "Suite 879",
        city: "Wisokyburgh",
        zipcode: "90566-7771",
      },
      phone: "010-692-6593 x09125",
      website: "anastasia.net",
      company: {
        catchPhrase: "Proactive didactic contingency",
      }
    },
    3: {
      name: "Clementine Bauch",
      username: "Samantha",
      email: "Nathan@yesenia.net",
      address: {
        street: "Douglas Extension",
        suite: "Suite 847",
        city: "McKenziehaven",
        zipcode: "59590-4157",
      },
      phone: "1-463-123-4447",
      website: "ramiro.info",
      company: {
        catchPhrase: "Face to face bifurcated interface",
      }
    },
    4: {
      name: "Patricia Lebsack",
      username: "Karianne",
      email: "Julianne.OConner@kory.org",
      address: {
        street: "Hoeger Mall",
        suite: "Apt. 692",
        city: "South Elvis",
        zipcode: "53919-4257",
      },
      phone: "493-170-9623 x156",
      website: "kale.biz",
      company: {
        catchPhrase: "Multi-tiered zero tolerance productivity",
      }
    },
    5: {
      name: "Chelsey Dietrich",
      username: "Kamren",
      email: "Lucio_Hettinger@annie.ca",
      address: {
        street: "Skiles Walks",
        suite: "Suite 351",
        city: "Roscoeview",
        zipcode: "33263",
      },
      phone: "(254)954-1289",
      website: "demarco.info",
      company: {
        catchPhrase: "User-centric fault-tolerant solution",
      }
    },
  }
  
  function parserUser(obj) {
    let {name, username, email, address: { street, suite, city, zipcode}, phone, website, company: {catchPhrase},} = obj, 
    userName = `Foydalanuvchinning ismi: ${name}`,
    userAccount = `Foydalanuvchinning nicki: ${username}`,
    userEmail = `Foydalanuvchinning elektron pochtasi: ${email}`,
    userFrom = `Manzil:\nKo'chasi: ${street}\nXonadon: ${suite}\nShahar: ${city}\nPochta indeksi: ${zipcode}`,
    userPhoneNumber = `Foydalanuvchining telefon raqami: ${phone}`,
    userWeb = `Kompaniya web-sayti: ${website}`,
    userCompany = `Kompaniya shiori: ${catchPhrase}`,
    userInfo = `${userName}\n${userAccount}\n${userEmail}\n${userFrom}\n${userPhoneNumber}\n${userWeb}\n${userCompany}`
    return userInfo 
  }
  for (const key in users) {
    console.log(parserUser(users[key]));
  }
  