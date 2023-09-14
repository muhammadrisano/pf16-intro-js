const products = [
    {
      name: "indomie goreng",
      desciption: "bla bla",
      price: 3500,
      stock: 10,
      produksi: [
        {
            namaPerusahan: 'PT. ABC',
            alamat: 'jl. jakarta barat no 12'
        },
        {
            namaPerusahan: 'PT. Agung Perkasa',
            alamat: 'jl. Pekanbaru no 17'
        },
        {
            namaPerusahan: 'PT. permata',
            alamat: 'jl. padang barat no 12'
        }
      ]
    },
    {
      name: "mie gelas kari ayam",
      description: "bla bla",
      price: 2000,
      stock: 100,
      produksi: [
        {
            namaPerusahan: 'PT. ABC2',
            alamat: 'jl. jakarta barat no 12'
        },
        {
            namaPerusahan: 'PT. Agung Perkasa2',
            alamat: 'jl. Pekanbaru no 17'
        },
        {
            namaPerusahan: 'PT. permata2',
            alamat: 'jl. padang barat no 12'
        }
      ]
    },
    {
      name: "sari ayam bawang",
      description: "bla bla",
      price: 4000,
      stock: 40,
      produksi: [
        {
            namaPerusahan: 'PT. ABC3',
            alamat: 'jl. jakarta barat no 12'
        },
        {
            namaPerusahan: 'PT. Agung Perkasa3',
            alamat: 'jl. Pekanbaru no 17'
        },
        {
            namaPerusahan: 'PT. permata3',
            alamat: 'jl. padang barat no 12'
        }
      ]
    },
  ];


 console.log(' Nana Perusahan : '+ products[2].produksi[0].namaPerusahan + ' dan Nama Makanan : ' +  products[2].name );
  