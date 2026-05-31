const bakshiParivar: any = {
  name: 'Bakshi Parivar',
  description: 'A family of Bakshis',
  ancestors: [
    {
      name: 'The Bakshis',
      description: '★ The Bakshis — Ancestral root (only the entries shown below are available)',
      children: [
        {
          name: 'Late Champalal Ji Bakshi',
          spouse: 'Late Jethi Bai Sa',
          spouseParents: { mom: '<Data not available>', dad: '<Data not available>' },
          image: 'assets/images/champalalji.webp',
          children: [
            {
              name: 'Late Manak Chand Ji Bakshi*',
              spouse: 'Late Kamla Devi',
              kidDescription: '★★ Late Manak Chand Ji Bakshi — (परंपरा,प्रतिष्ठा और अनुशासन)',
              spouseDescription: '★★ Late Kamla Devi —  (सूत्रधार - An Amazing Lady who held the family together through thick and thin)',
              spouseParents: { mom: 'Late Indra Devi', dad: 'Late Tulsi Ram Ji Surana' },
              image: 'assets/images/maa-1.webp',
              children: [
                {
                  name: 'Chandrakanta Sethia (मोलू)*',
                  kidDescription: '★★★ Chandrakanta Sethia (मोलू) — (विशालहृदयी - The ocean hearted person.)',
                  spouse: 'Late Swami Anand Prem',
                  spouseParents: { mom: 'Late Gulab devi', dad: 'Late Jewant Mal Sa Sethia' },
                  image: 'assets/images/bhuaasa.webp',
                  children: [
                    {
                      name: 'Ashok Prem*',
                      spouse: 'Mukta Jain',
                      spouseParents: { mom: 'Pushpa Devi', dad: 'Late Shantilal Gang' },
                      image: 'assets/images/ashok.webp',
                      children: [
                        { name: 'Juhi Jain', image: 'assets/images/juhi.webp' },
                        { name: 'Pulkit Jain', image: 'assets/images/tinku.webp' }
                      ]
                    },
                    {
                      name: 'Arvind Prem (Bablu)*',
                      spouse: 'Trishla Sethia',
                      spouseParents: { mom: 'Sushila Lalwani', dad: 'Ashkaran Lalwani' },
                      image: 'assets/images/babloo.webp',
                      children: [
                        { name: 'Aayush Sethia', image: 'assets/images/aayush.webp' },
                        { name: 'Lakshay Sethia', image: 'assets/images/lakshay.webp' }
                      ]
                    }
                  ]
                },
                {
                  name: 'Late Lalit Kumar Bakshi (Lalji)*',
                  spouse: 'Suman Jain (Nirmala)',
                  kidDescription: '★★★ Late Lalit Kumar Bakshi (Lalji) — (उदारहृदय - The richest hearted person of this planet.)',
                  spouseParents: { mom: 'Late Sharda Devi', dad: 'Sardar Bhai Ji Kochar' },
                  image: 'assets/images/lalit.webp',
                  children: [
                    {
                      name: 'Rishabh Kumar Bakshi (Vicky)*',
                      spouse: 'Apurva Jain',
                      spouseParents: { mom: 'Veena Jain', dad: 'Sunil Kumar Jain' },
                      image: 'assets/images/rishabh.webp',
                      children: [
                        { name: 'Khwaab Jain', image: 'assets/images/khwaab.webp' },
                        { name: 'Aprisha Jain', image: 'assets/images/aprisha.webp' }
                      ]
                    },
                    {
                      name: 'Shilpi Pugalia*',
                      spouse: 'Nitin Pugalia',
                      spouseParents: { mom: 'Madhu Pugalia', dad: 'Nirmal Pugalia' },
                      image: 'assets/images/shilpi.webp',
                      children: []
                    }
                  ]
                },
                {
                  name: 'Sarla Chordia (Manju)*',
                  spouse: 'Sunil Chordia',
                  kidDescription: '★★★ Sarla Chordia (Manju) — (दयालु - The most kind person of the family.)',
                  image: 'assets/images/manju.webp',
                  spouseParents: { mom: 'Late Upyog kanwar', dad: 'Late Parsan Mal Sa Chordia' },
                  children: [
                    {
                      name: 'Priyanka Surana (Tina)*',
                      spouse: 'Nishant Surana',
                      spouseParents: { mom: 'Lalita surana', dad: 'Narendra Mal Sa Surana' },
                      image: 'assets/images/tina.webp',
                      children: [
                        { name: 'Vihan Surana', image: 'assets/images/tina-2.webp', },
                        { name: 'Anay Surana', image: 'assets/images/tina-1.webp', }
                      ]
                    },
                    {
                      name: 'Prateek Chordia (Rinku)*',
                      spouse: 'Nikita Chordia',
                      spouseParents: { mom: 'Babita Baid', dad: 'Suresh Kumar Baid' },
                      image: 'assets/images/rinku2.webp',
                      children: [
                        { name: 'Yaashi Chordia', image: 'assets/images/rinku-2.webp', },
                        { name: 'Dishi Chordia', image: 'assets/images/rinku-1.webp', }
                      ]
                    }
                  ]
                },
                {
                  name: 'Suman Sand (संती)*',
                  spouse: 'Sunil Sand',
                  kidDescription: '★★★ Suman Sand (संती) — (मेधावी - The most intelligent person of the family.)',
                  spouseParents: { mom: 'Late Shanti Devi Sand', dad: 'Late Mohan Mal Sa Sand' },
                  image: 'assets/images/suman.webp',
                  children: [
                    {
                      name: 'Pratibha Khabiya (Dimple/Guddu)*',
                      spouse: 'Ajit Khabiya',
                      spouseParents: { mom: 'Late Nirmala Khabiya', dad: 'Rajendra Khabiya' },
                      image: 'assets/images/dimple.webp',
                      children: [
                        { name: 'Ayaansh Khabiya', image: 'assets/images/ayaansh.webp' }
                      ]
                    },
                    {
                      name: 'Nidhi Bhadani*',
                      spouse: 'Pankaj Bhadani',
                      spouseParents: { mom: 'Late Sushila Devi Bhadani', dad: 'Late Kiran Chand Bhadani' },
                      image: 'assets/images/nidhi.webp',
                      children: [
                        { name: 'Lehak Jain', image: 'assets/images/nidhi-1.webp' }
                      ]
                    },
                    { name: 'Shreya Jain', image: 'assets/images/shreya.webp' },
                    { name: 'Shraddha Jain', image: 'assets/images/shraddha.webp' }
                  ]
                },
                {
                  name: 'Kusum Kankariya (Pappi)*',
                  spouse: 'Pukhraj Kankariya',
                  kidDescription: '★★★ Kusum Kankariya (Pappi) — (सहिष्णु - The most tolerant person of the family.)',
                  spouseParents: { mom: 'Late Vimla Devi', dad: 'Late Sawailal Ji Kankariya' },
                  image: 'assets/images/kusum.webp',
                  children: [
                    {
                      name: 'Virendra Kankariya (Viru)*',
                      spouse: 'Preksha Kankariya',
                      spouseParents: { mom: 'Madhu Jamad', dad: 'Late Sunil Kumar Sa Jamad' },
                      image: 'assets/images/viru.webp',
                      children: []
                    },
                    {
                      name: 'Pawan Kankariya (Charlie)*',
                      spouse: 'Rishika Kankariya',
                      spouseParents: { mom: 'Sangeeta Singhvi', dad: 'Praveen Sa Singhvi' },
                      image: 'assets/images/charlie.webp',
                      children: []
                    }
                  ]
                },
                {
                  name: 'Vandana Jain (Gattu)*',
                  spouse: 'Sachindra Singhvi',
                  kidDescription: '★★★ Vandana Jain (Gattu) — (स्वनिर्मित - The One who created her own future through determination.)',
                  spouseParents: { mom: 'Late Shanti Singhvi', dad: 'Late Bheruchand Sa Singhvi' },
                  image: 'assets/images/vandana.webp',
                  children: [
                    { name: 'Ankit Singhvi', image: 'assets/images/ankit.webp' },
                    { name: 'Swati Singhvi', image: 'assets/images/swati.webp' }
                  ]
                },
                {
                  name: 'Vijay Kumar Bakshi (Munna)*',
                  kidDescription: '★★★ Vijay Kumar Bakshi (Munna) — (मस्तमौला - The super cool Mama and the symbol of strength, selfless, dedication & sacrifice.)',
                  spouse: 'Nidhi Jain',
                  spouseParents: { mom: 'Late Kiran Chordia', dad: 'Late Maktur Mal Sa Chordia' },
                  image: 'assets/images/vijay.webp',
                  children: [
                    { name: 'Poorva Jain', image: 'assets/images/poorva.webp' },
                    { name: 'Kaushal Jain', image: 'assets/images/kaushal.webp' }
                  ]
                },
                {
                  name: 'Jaishri Jain (Gudiya)*',
                  spouse: 'Sudhir Kumbhat',
                  kidDescription: '★★★ Jaishri Jain (Gudiya) — (ज़िंदादिल - Sab se dur, sab ke pass, baki sab first class! Just a fearless lady living life her own way.)',
                  spouseParents: { mom: 'Manju Kumbhat', dad: 'Gyan Chand Kumbhat' },
                  image: 'assets/images/gudiya.webp',
                  children: [
                    { name: 'Nishchal Kumbhat Jain (Golu)', image: 'assets/images/nishchal.webp' },
                    { name: 'Chaitanya Kumbhat Jain (Gungun)', image: 'assets/images/gungun.webp' }
                  ]
                }
              ]
            },
            {
              name: 'Late Dhanraj Bakshi (धनजी/काकासा)*',
              spouse: 'Late Pushpa Devi',
              spouseParents: { mom: 'Late SiryaBai Sa', dad: 'Late Chandmal Ji Kochar' },
              image: 'assets/images/dhanraj.webp',
              children: [
                {
                  name: 'Buddhi Prakash Bakshi (Mannu)*',
                  spouse: 'Hansa Bakshi',
                  kidDescription: '★★★ Buddhi Prakash Bakshi (Mannu) — (Guardian - The caring protector of the family.)',
                  spouseParents: { mom: 'Shanti Devi', dad: 'Late Laxmi Chand Mehta' },
                  image: 'assets/images/manu.webp',
                  children: [
                    {
                      name: 'Chandani Babel*',
                      spouse: 'Deepak Babel',
                      spouseParents: { mom: 'Usha Babel', dad: 'Inderchand Babel' },
                      image: 'assets/images/chandani.webp',
                      children: [
                        { name: 'Divit Babel', image: 'assets/images/chandani-1.webp' },
                        { name: 'Kalp Babel', image: 'assets/images/chandani-2.webp' }
                      ]
                    },
                    { name: 'Pratik Bakshi (Vivek)', image: 'assets/images/vivek.webp' },
                    { name: 'Himani Bakshi', image: 'assets/images/himani.webp' }
                  ]
                },
                {
                  name: 'Saroj Doshi (Bai)*',
                  spouse: 'Ashok Doshi',
                  kidDescription: '★★★ Saroj Doshi (Bai) — (Nurturing - A woman full of love, who sacrifices her time for her family and children.)',
                  spouseParents: { mom: 'Late Ugam Kanwar Doshi', dad: 'Late Sampat Raj Doshi' },
                  image: 'assets/images/Ashokji.webp',
                  children: [
                    {
                      name: 'Khushbu Burad*',
                      spouse: 'Punit Burad',
                      spouseParents: { mom: 'Sumitra Devi', dad: 'Jambu Sa Burad' },
                      image: 'assets/images/khushbu-borunda.webp',
                      children: [
                        { name: 'Prisha Burad', image: 'assets/images/khushbu-borunda2.webp' }
                      ]
                    },
                    {
                      name: 'Sarika Karnawat (Ghotu)*',
                      spouse: 'Raunak Karnawat',
                      spouseParents: { mom: 'Urmila Karnawat', dad: 'Late Pardeep Karnawat' },
                      image: 'assets/images/Ghotu.webp',
                      children: []
                    },
                    { name: 'Arihant Doshi', image: 'assets/images/Arihant.webp' },
                  ]
                },
                {
                  name: 'Sunita Lalwani (Baby)*',
                  spouse: 'Kamal Lalwani',
                  kidDescription: '★★★ Sunita Lalwani (Baby) — (Selfless - A kind hearted lady who loves family gatherings, cares for relatives, and always puts her family’s happiness before her own.)',
                  spouseParents: { mom: 'Late Ghisi Devi Lalwani', dad: 'Late Tejkaran Lalwani ' },
                  image: 'assets/images/babybhuaa.webp',
                  children: [
                    {
                      name: 'Khushbu Kothari*',
                      spouse: 'Rishabh Kothari',
                      spouseParents: { mom: 'Saroj Kothari', dad: 'Vimal Kothari' },
                      image: 'assets/images/khushbu-nagaur.webp',
                      children: [
                        { name: 'Ritvi Kothari', image: 'assets/images/khushbu-nagaur-1.webp' },
                        { name: 'Prishu Kothari', image: 'assets/images/khushbu-nagaur-2.webp' }
                      ]
                    },
                    {
                      name: 'Kavita Choudhary*',
                      spouse: 'Arvind Choudhary',
                      spouseParents: { mom: 'Sheela Devi', dad: 'Subhash Chand Choudhary' },
                      image: 'assets/images/kavita.webp',
                      children: [
                        { name: 'Khushan Choudhary', image: 'assets/images/kavita-1.webp' },
                        { name: 'Soham Choudhary', image: 'assets/images/kavita-2.webp' }
                      ]
                    },
                    {
                      name: 'Kalpana Bafna (Kalpu)*',
                      spouse: 'Vaibhav Bafna',
                      spouseParents: { mom: 'Shobha Bafna', dad: 'Chhagan Sa Bafna' },
                      image: 'assets/images/vaibhav.webp',
                      children: [
                        { name: 'Bhavika Bafna', image: 'assets/images/vaibhav-1.webp' }
                      ]
                    },
                    { name: 'Harshit Lalwani', image: 'assets/images/harshit.webp' }
                  ]
                },
                {
                  name: 'Sangeeta Nahar (Pappu)*',
                  spouse: 'Kishor Nahar',
                  kidDescription: '★★★ Sangeeta Nahar (Pappu) — Anchor — Keeps the family grounded',
                  spouseParents: { mom: 'Maina Devi Nahar', dad: 'Late Navratan Mal Sa Nahar' },
                  image: 'assets/images/kishor.webp',
                  children: [
                    {
                      name: 'Nikita Bhansali*',
                      spouse: 'Pravesh Bhansali',
                      spouseParents: { mom: 'Prabha Bhansali', dad: 'Sushil Bhansali' },
                      image: 'assets/images/nikita.webp',
                      children: [
                        { name: 'Garvisha Bhansali', image: 'assets/images/nikita-1.webp' }
                      ]
                    },
                    { name: 'Ankita Nahar (Gudiya)', image: 'assets/images/ankita.webp' }
                  ]
                }
              ]
            },
            {
              name: 'Late LuniBai Sa*',
              spouse: 'Late Poonam Chand Ji Banthiya',
              spouseParents: { mom: '<Data not available>', dad: '<Data not available>' },
              image: 'assets/images/lunibaisa.webp',
              children: [{
                name: 'Shantilal Banthiya*',
                spouse: 'Shanti Devi'
              }, {
                name: 'Late Vijay Chand Banthia*',
                spouse: 'Jethi Devi'
              }, {
                name: 'Vimala Devi*',
                spouse: 'Mohanlal Sethia'
              }, {
                name: 'Tarachand Banthia*',
                spouse: 'Suraj Devi'
              }, {
                name: 'Mangilal Banthia*',
                spouse: 'Prem Lata Banthia'
              }, {
                name: 'Nirmala Sethia*',
                spouse: 'Shantilal Sethia'
              }, {
                name: 'Banshilal Banthia*',
                spouse: 'Lalita Banthia'
              }, {
                name: 'Sushila Sethia*',
                spouse: 'Mahendra Sethia'
              }]
            },
            {
              name: 'Late Gulab Devi Sa*',
              spouse: 'Late Pratap Chand Ji Pugalia',
              spouseParents: { mom: '<Data not available>', dad: '<Data not available>' },
              image: 'assets/images/gulabbaisa1.webp',
              children: [{
                name: 'Bhawari Devi*',
                spouse: 'Late Askaran Bafna'
              }, {
                name: 'Kailash Chand Pugalia*',
                spouse: 'Aruna Pugalia'
              }, {
                name: 'Late Nirmala Devi*',
                spouse: 'Late Keval Chand Parakh'
              }, {
                name: 'Late Prakash Chand Pugalia*',
                spouse: 'Late Anju Devi Pugalia',
                spouseParents: { mom: 'Late Sushila Devi Nahata', dad: 'Late Jethmal Nahata' },
                children: [
                  {
                    name: 'Varsha Lunawat*',
                    spouse: 'Vikas Lunawat',
                    spouseParents: { mom: 'Manju Devi Lunawat', dad: 'Sohanlal Ji Lunawat' },
                    children: [
                      { name: 'Vanshika Lunawat', image: 'no need' },
                      { name: 'Devansh Lunawat', image: 'no need' }
                    ]
                  }, {
                    name: 'Priyanka Bafna (Pinku)*',
                    spouse: 'Hemant Bafna',
                    spouseParents: { mom: 'Manju Devi Bafna', dad: 'Pukhraj Bafna' },
                    children: [
                      { name: 'Sarthak Bafna', image: 'no need' }
                    ]
                  }
                ]
              }, {
                name: 'Navratan Pugalia*',
                spouse: 'Devika Pugalia'
              }, {
                name: 'Rajender Pugalia*',
                spouse: 'Saroj Pugalia'
              }, {
                name: 'Santosh Bhansali*',
                spouse: 'Suresh Bhansali'
              }]
            }
          ]
        }
      ]
    }
  ]
};

export default bakshiParivar;
