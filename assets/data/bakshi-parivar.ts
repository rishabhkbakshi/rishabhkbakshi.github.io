const bakshiParivar: any = {
  name: 'Bakshi Parivar',
  description: 'A family of Bakshis',
  ancestors: [
    {
      name: 'The Bakshis',
      description: '★ Ancestral root (only the entries shown below are available)',
      children: [
        {
          name: 'Late Champalal Ji Bakshi',
          spouse: 'Late Jethi Bai Sa',
          spouseParents: '',
          coupleDescription: '★ Virtuous Couple — who opened the doors for Late Kamla Deviji to become part of the family and laid the foundation of its values and traditions.',
          image: 'assets/images/champalal.webp',
          children: [
            {
              name: 'Late Manak Chand Ji Bakshi*',
              spouse: 'Late Kamla Devi',
              dateOfDeath: 'Please Provide',
              dateOfBirth: 'Please Provide',
              kidDescription: '★★ परंपरा,प्रतिष्ठा और अनुशासन',
              spouseDateOfBirth: 'Please Provide',
              spouseDateOfDeath: '16 October',
              spouseDescription: '★★ सूत्रधार — An Amazing Lady who held the family together through thick and thin',
              spouseParents: { mom: 'Late Indra Devi', dad: 'Late Tulsi Ram Ji Surana' },
              image: 'assets/images/maa.webp',
              children: [
                {
                  name: 'Chandrakanta Sethia (मोलू)*',
                  dateOfBirth: '05 June',
                  spouse: 'Late Swami Anand Prem',
                  kidDescription: '★★★ विशालहृदयी — The ocean hearted person',
                  spouseDateOfBirth: '02 October',
                  spouseDateOfDeath: '30 October',
                  spouseParents: { mom: 'Late Gulab devi', dad: 'Late Jewant Mal Sethia' },
                  image: 'assets/images/chandrakanta.webp',
                  children: [
                    {
                      name: 'Ashok Prem*',
                      dateOfBirth: '22 June',
                      spouse: 'Mukta Jain',
                      spouseDateOfBirth: '28 February',
                      spouseParents: { mom: 'Pushpa Devi', dad: 'Late Shantilal Gang' },
                      image: 'assets/images/ashok.webp',
                      children: [
                        { name: 'Juhi Jain', image: 'assets/images/juhi.webp', dateOfBirth: '02 December' },
                        { name: 'Pulkit Jain', image: 'assets/images/pulkit.webp', dateOfBirth: '10 May' }
                      ]
                    },
                    {
                      name: 'Arvind Prem (Bablu)*',
                      dateOfBirth: '06 September',
                      spouse: 'Trishla Sethia',
                      spouseDateOfBirth: '12 September',
                      spouseParents: { mom: 'Sushila Lalwani', dad: 'Ashkaran Lalwani' },
                      image: 'assets/images/arvind.webp',
                      children: [
                        { name: 'Aayush Sethia', image: 'assets/images/aayush.webp', dateOfBirth: '04 January' },
                        { name: 'Lakshay Sethia', image: 'assets/images/lakshay.webp', dateOfBirth: '18 January', }
                      ]
                    }
                  ]
                },
                {
                  name: 'Late Lalit Kumar Bakshi (Lalji)*',
                  dateOfBirth: 'मिगसर शुक्ल(सुदी) एकादशी',
                  dateOfDeath: '08 February',
                  kidDescription: '★★★ उदारहृदय — The richest hearted person of this planet',
                  spouse: 'Suman Jain (Nirmala)',
                  spouseDateOfBirth: '10 June (24 July)',
                  spouseParents: { mom: 'Late Sharda Devi', dad: 'Sardar Bhai Kochar' },
                  image: 'assets/images/lalit.webp',
                  children: [
                    {
                      name: 'Rishabh Kumar Bakshi (Vicky)*',
                      dateOfBirth: '11 September',
                      spouse: 'Apurva Jain',
                      spouseDateOfBirth: '09 November',
                      spouseParents: { mom: 'Veena Jain', dad: 'Sunil Kumar Jain' },
                      image: 'assets/images/rishabh.webp',
                      children: [
                        { name: 'Khwaab Jain', image: 'assets/images/khwaab.webp', dateOfBirth: '01 December' },
                        { name: 'Aprisha Jain', image: 'assets/images/aprisha.webp', dateOfBirth: '11 January' }
                      ]
                    },
                    {
                      name: 'Shilpi Pugalia*',
                      dateOfBirth: '21 May',
                      spouse: 'Nitin Pugalia',
                      spouseDateOfBirth: '28 November',
                      spouseParents: { mom: 'Madhu Pugalia', dad: 'Nirmal Pugalia' },
                      image: 'assets/images/shilpi.webp',
                      children: []
                    }
                  ]
                },
                {
                  name: 'Sarla Chordia (Manju)*',
                  dateOfBirth: '30 September',
                  kidDescription: '★★★ दयालु — The most kind person of the family',
                  spouse: 'Sunil Chordia',
                  spouseDateOfBirth: '20 April',
                  spouseParents: { mom: 'Late Upyog kanwar', dad: 'Late Parsan Mal Chordia' },
                  image: 'assets/images/sarla.webp',
                  children: [
                    {
                      name: 'Priyanka Surana (Tina)*',
                      dateOfBirth: '22 June',
                      spouse: 'Nishant Surana',
                      spouseDateOfBirth: '02 May',
                      spouseParents: { mom: 'Lalita surana', dad: 'Narendra Mal Surana' },
                      image: 'assets/images/priyanka.webp',
                      children: [
                        { name: 'Vihaan Surana', image: 'assets/images/vihaan.webp', dateOfBirth: '21 October' },
                        { name: 'Anay Surana', image: 'assets/images/anay.webp', dateOfBirth: '14 September', }
                      ]
                    },
                    {
                      name: 'Prateek Chordia (Rinku)*',
                      dateOfBirth: '15 May',
                      spouse: 'Nikita Chordia',
                      spouseDateOfBirth: '26 December',
                      spouseParents: { mom: 'Babita Baid', dad: 'Suresh Kumar Baid' },
                      image: 'assets/images/prateek.webp',
                      children: [
                        { name: 'Yaashi Chordia', image: 'assets/images/yaashi.webp', dateOfBirth: '04 February' },
                        { name: 'Dishi Chordia', image: 'assets/images/dishi.webp', dateOfBirth: '08 May' }
                      ]
                    }
                  ]
                },
                {
                  name: 'Suman Sand (संती)*',
                  dateOfBirth: '29 September',
                  kidDescription: '★★★ मेधावी — The most intelligent person of the family',
                  spouse: 'Sunil Sand',
                  spouseDateOfBirth: '25 March',
                  spouseParents: { mom: 'Late Shanti Devi Sand', dad: 'Late Mohan Mal Sand' },
                  image: 'assets/images/suman.webp',
                  children: [
                    {
                      name: 'Pratibha Khabiya (Dimple/Guddu)*',
                      dateOfBirth: '30 September',
                      spouse: 'Ajit Khabiya',
                      spouseDateOfBirth: '12 December',
                      spouseParents: { mom: 'Late Nirmala Khabiya', dad: 'Rajendra Khabiya' },
                      image: 'assets/images/pratibha.webp',
                      children: [
                        { name: 'Ayaansh Khabiya', image: 'assets/images/ayaansh.webp', dateOfBirth: '18 June', }
                      ]
                    },
                    {
                      name: 'Nidhi Bhadani*',
                      dateOfBirth: '06 April',
                      spouse: 'Pankaj Bhadani',
                      spouseDateOfBirth: '25 December',
                      spouseParents: { mom: 'Late Sushila Devi Bhadani', dad: 'Late Kiran Chand Bhadani' },
                      image: 'assets/images/nidhi.webp',
                      children: [
                        { name: 'Lehak Jain', image: 'assets/images/lehak.webp', dateOfBirth: '08 February', }
                      ]
                    },
                    { name: 'Shreya Jain', image: 'assets/images/shreya.webp', dateOfBirth: '10 January', },
                    { name: 'Shraddha Jain', image: 'assets/images/shraddha.webp', dateOfBirth: '10 August', }
                  ]
                },
                {
                  name: 'Kusum Kankariya (Pappi)*',
                  dateOfBirth: '11 December',
                  kidDescription: '★★★ सहिष्णु — The most tolerant person of the family',
                  spouse: 'Pukhraj Kankariya',
                  spouseDateOfBirth: '01 April',
                  spouseParents: { mom: 'Late Vimla Devi', dad: 'Late Sawailal Kankariya' },
                  image: 'assets/images/kusum.webp',
                  children: [
                    {
                      name: 'Virendra Kankariya (Viru)*',
                      dateOfBirth: '23 May',
                      spouse: 'Preksha Kankariya',
                      spouseDateOfBirth: '13 January',
                      spouseParents: { mom: 'Madhu Jamad', dad: 'Late Sunil Kumar Jamad' },
                      image: 'assets/images/virendra.webp',
                      children: []
                    },
                    {
                      name: 'Pawan Kankariya (Charlie)*',
                      dateOfBirth: '09 June',
                      spouse: 'Rishika Kankariya',
                      spouseDateOfBirth: '02 January',
                      spouseParents: { mom: 'Sangeeta Singhvi', dad: 'Praveen Singhvi' },
                      image: 'assets/images/pawan.webp',
                      children: []
                    }
                  ]
                },
                {
                  name: 'Vandana Jain (Gattu)*',
                  dateOfBirth: '12 July',
                  kidDescription: '★★★ स्वनिर्मित — The One who created her own future through determination',
                  spouse: 'Sachindra Singhvi',
                  spouseDateOfBirth: '23 August',
                  spouseParents: { mom: 'Late Shanti Singhvi', dad: 'Late Bheruchand Singhvi' },
                  image: 'assets/images/vandana.webp',
                  children: [
                    { name: 'Ankit Singhvi', image: 'assets/images/ankit.webp', dateOfBirth: '01 April', },
                    { name: 'Swati Singhvi', image: 'assets/images/swati.webp', dateOfBirth: '10 January', }
                  ]
                },
                {
                  name: 'Vijay Kumar Bakshi (Munna)*',
                  dateOfBirth: '06 October',
                  kidDescription: '★★★ मस्तमौला — The super cool Mama and the symbol of strength, selfless, dedication & sacrifice',
                  spouse: 'Nidhi Jain',
                  spouseDateOfBirth: '30 November',
                  spouseParents: { mom: 'Late Kiran Chordia', dad: 'Late Maktur Mal Chordia' },
                  image: 'assets/images/vijay.webp',
                  children: [
                    { name: 'Poorva Jain', image: 'assets/images/poorva.webp', dateOfBirth: '26 September' },
                    { name: 'Kaushal Jain', image: 'assets/images/kaushal.webp', dateOfBirth: '29 July' }
                  ]
                },
                {
                  name: 'Jaishri Jain (Gudiya)*',
                  dateOfBirth: '01 January',
                  kidDescription: '★★★ ज़िंदादिल — Sab se dur, sab ke pass, baki sab first class! Just a fearless lady living life her own way',
                  spouse: 'Sudhir Kumbhat',
                  spouseDateOfBirth: '16 January',
                  spouseParents: { mom: 'Manju Kumbhat', dad: 'Gyan Chand Kumbhat' },
                  image: 'assets/images/jaishri.webp',
                  children: [
                    { name: 'Nishchal Kumbhat Jain (Golu)', image: 'assets/images/nishchal.webp', dateOfBirth: '03 March' },
                    { name: 'Chaitanya Kumbhat Jain (Gungun)', image: 'assets/images/chaitanya.webp', dateOfBirth: '31 May', }
                  ]
                }
              ]
            },
            {
              name: 'Late Dhanraj Bakshi (धनजी/काकासा)*',
              dateOfBirth: 'धनतेरस',
              dateOfDeath: 'फाल्गुन शुक्ल(सुदी) चतुर्दशी',
              kidDescription: '★★ Pure hearted — He carried a heart full of affection and kindness loving everyone around him in his own quiet way',
              spouse: 'Late Pushpa Devi',
              spouseParents: { mom: 'Late Sirya Bai', dad: 'Late Chandmal Kochar' },
              spouseDateOfBirth: 'Please Provide',
              spouseDateOfDeath: 'Please Provide',
              spouseDescription: '★★ Compassionate — Her heart was made of kindness and his soul was filled with wisdom',
              image: 'assets/images/dhanraj.webp',
              children: [
                {
                  name: 'Buddhi Prakash Bakshi (Mannu)*',
                  dateOfBirth: '01 December',
                  kidDescription: '★★★ Guardian — The caring protector of the family',
                  spouse: 'Hansa Bakshi',
                  spouseDateOfBirth: '01 December',
                  spouseParents: { mom: 'Shanti Devi', dad: 'Late Laxmi Chand Mehta' },
                  image: 'assets/images/buddhiprakash.webp',
                  children: [
                    {
                      name: 'Chandani Babel*',
                      dateOfBirth: '18 June',
                      spouse: 'Deepak Babel',
                      spouseDateOfBirth: '27 October',
                      spouseParents: { mom: 'Usha Babel', dad: 'Inderchand Babel' },
                      image: 'assets/images/chandani.webp',
                      children: [
                        { name: 'Divit Babel', image: 'assets/images/divit.webp', dateOfBirth: '12 January' },
                        { name: 'Kalp Babel', image: 'assets/images/kalp.webp', dateOfBirth: '02 February', }
                      ]
                    },
                    { name: 'Pratik Bakshi (Vivek)', image: 'assets/images/vivek.webp', dateOfBirth: '30 November' },
                    { name: 'Himani Bakshi', image: 'assets/images/himani.webp', dateOfBirth: '02 August' }
                  ]
                },
                {
                  name: 'Saroj Doshi (Bai)*',
                  dateOfBirth: '2 April',
                  kidDescription: '★★★ Nurturing — A woman full of love, who sacrifices her time for her family and children',
                  spouse: 'Ashok Doshi',
                  spouseDateOfBirth: '17 April',
                  spouseParents: { mom: 'Late Ugam Kanwar Doshi', dad: 'Late Sampat Raj Doshi' },
                  image: 'assets/images/ashokdoshi.webp',
                  children: [
                    {
                      name: 'Khushbu Burad*',
                      dateOfBirth: '18 March',
                      spouse: 'Punit Burad',
                      spouseDateOfBirth: '17 August',
                      spouseParents: { mom: 'Sumitra Devi', dad: 'Jambu Burad' },
                      image: 'assets/images/khushbuburad.webp',
                      children: [
                        { name: 'Prisha Burad', image: 'assets/images/prisha.webp', dateOfBirth: '15 January', }
                      ]
                    },
                    {
                      name: 'Sarika Karnawat (Ghotu)*',
                      dateOfBirth: '11 January',
                      spouse: 'Raunak Karnawat',
                      spouseDateOfBirth: '25 May',
                      spouseParents: { mom: 'Urmila Karnawat', dad: 'Late Pardeep Karnawat' },
                      image: 'assets/images/sarika.webp',
                      children: []
                    },
                    { name: 'Arihant Doshi', image: 'assets/images/arihant_.webp', dateOfBirth: '16 January' },
                  ]
                },
                {
                  name: 'Sunita Lalwani (Baby)*',
                  kidDescription: '★★★ Selfless — A kind hearted lady who loves family gatherings, cares for relatives, and always puts her family’s happiness before her own',
                  dateOfBirth: '07 July',
                  spouse: 'Kamal Lalwani',
                  spouseDateOfBirth: '05 June',
                  spouseParents: { mom: 'Late Ghisi Devi Lalwani', dad: 'Late Tejkaran Lalwani ' },
                  image: 'assets/images/sunita.webp',
                  children: [
                    {
                      name: 'Khushbu Kothari*',
                      dateOfBirth: '15 August',
                      spouse: 'Rishabh Kothari',
                      spouseDateOfBirth: '24 April',
                      spouseParents: { mom: 'Saroj Kothari', dad: 'Vimal Kothari' },
                      image: 'assets/images/khushbukothari.webp',
                      children: [
                        { name: 'Ritvi Kothari', image: 'assets/images/ritvi.webp', dateOfBirth: '31 December' },
                        { name: 'Prishu Kothari', image: 'assets/images/prishu.webp', dateOfBirth: '19 October' }
                      ]
                    },
                    {
                      name: 'Kavita Choudhary*',
                      dateOfBirth: '28 October',
                      spouse: 'Arvind Choudhary',
                      spouseDateOfBirth: '24 May',
                      spouseParents: { mom: 'Sheela Devi', dad: 'Subhash Chand Choudhary' },
                      image: 'assets/images/kavita.webp',
                      children: [
                        { name: 'Khushan Choudhary', image: 'assets/images/khushan.webp', dateOfBirth: '29 October' },
                        { name: 'Soham Choudhary', image: 'assets/images/soham.webp', dateOfBirth: '27 July' }
                      ]
                    },
                    {
                      name: 'Kalpana Bafna (Kalpu)*',
                      dateOfBirth: '10 December',
                      spouse: 'Vaibhav Bafna',
                      spouseDateOfBirth: '05 September',
                      spouseParents: { mom: 'Shobha Bafna', dad: 'Chhagan Bafna' },
                      image: 'assets/images/kalpana.webp',
                      children: [
                        { name: 'Bhavika Bafna', image: 'assets/images/bhavika.webp', dateOfBirth: '11 January' }
                      ]
                    },
                    { name: 'Harshit Lalwani', image: 'assets/images/harshit.webp', dateOfBirth: '14 September' }
                  ]
                },
                {
                  name: 'Sangeeta Nahar (Pappu)*',
                  dateOfBirth: '21 December',
                  kidDescription: '★★★ Anchor — Keeps the family grounded',
                  spouse: 'Kishor Nahar',
                  spouseDateOfBirth: '13 January',
                  spouseParents: { mom: 'Maina Devi Nahar', dad: 'Late Navratan Mal Nahar' },
                  image: 'assets/images/sangeeta.webp',
                  children: [
                    {
                      name: 'Nikita Bhansali*',
                      dateOfBirth: '18 June',
                      spouse: 'Pravesh Bhansali',
                      spouseDateOfBirth: '10 January',
                      spouseParents: { mom: 'Prabha Bhansali', dad: 'Sushil Bhansali' },
                      image: 'assets/images/nikita.webp',
                      children: [
                        { name: 'Garvisha Bhansali', image: 'assets/images/garvisha.webp', dateOfBirth: '06 October' }
                      ]
                    },
                    { name: 'Ankita Nahar (Gudiya)', image: 'assets/images/ankita.webp', dateOfBirth: '13 April', }
                  ]
                }
              ]
            },
            {
              name: 'Late Luni Bai Sa*',
              spouse: 'Late Poonam Chand Ji Banthiya',
              spouseParents: '',
              image: 'assets/images/lunibai.webp',
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
              name: 'Late Gulab Devi Ji*',
              spouse: 'Late Pratap Chand Ji Pugalia',
              spouseParents: '',
              image: 'assets/images/gulabdevi.webp',
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
                    spouseParents: { mom: 'Manju Devi Lunawat', dad: 'Sohanlal Lunawat' },
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
