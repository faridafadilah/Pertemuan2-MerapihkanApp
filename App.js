const { SaveContact, Pertanyaan } = require('./contact');

// Pertanyaan yang akan diisi ke function Pertanyaan 
const main = async() => {
  const nama = await Pertanyaan('Nama Lengkap: ');
  const nohp = await Pertanyaan('No Hp: ');
  const email = await Pertanyaan('Email: ');

  // Memanggil fungsi untuk menyimpan data
  SaveContact(nama, nohp, email); 
}

main();