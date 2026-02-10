import temple1 from "@/assets/temple-1.jpg";
import temple2 from "@/assets/temple-2.jpg";
import temple3 from "@/assets/temple-3.jpg";
import temple4 from "@/assets/temple-4.jpg";
import temple5 from "@/assets/temple-5.jpg";
import temple6 from "@/assets/temple-6.jpg";

export interface Temple {
  id: string;
  name: string;
  nameTamil: string;
  location: string;
  locationTamil: string;
  image: string;
  description: string;
  descriptionTamil: string;
  deity: string;
  deityTamil: string;
  raised: number;
  goal: number;
  donors: number;
  listedBy: {
    name: string;
    avatar: string;
    phone: string;
    email: string;
    role: string;
  };
}

export const temples: Temple[] = [
  {
    id: "meenakshi-amman",
    name: "Meenakshi Amman Temple",
    nameTamil: "மீனாட்சி அம்மன் கோயில்",
    location: "Madurai, Tamil Nadu",
    locationTamil: "மதுரை, தமிழ்நாடு",
    image: temple1,
    description: "The Meenakshi Amman Temple is a historic Hindu temple dedicated to Meenakshi, a form of Parvati, and her consort Sundareshwar, a form of Shiva. Located on the southern bank of the Vaigai River, this temple is the heart and lifeline of Madurai. The temple complex houses 14 gopurams (gateway towers), the tallest being the southern tower at 170 feet. The temple attracts 15,000 visitors daily and around 25,000 during festivals.",
    descriptionTamil: "மீனாட்சி அம்மன் கோயில் என்பது பார்வதியின் ஒரு வடிவமான மீனாட்சிக்கும், அவரது கணவர் சிவனின் ஒரு வடிவமான சுந்தரேஸ்வரருக்கும் அர்ப்பணிக்கப்பட்ட ஒரு வரலாற்று சிறப்புமிக்க இந்துக் கோயிலாகும்.",
    deity: "Goddess Meenakshi & Lord Sundareshwar",
    deityTamil: "மீனாட்சி அம்மன் & சுந்தரேஸ்வரர்",
    raised: 850000,
    goal: 1500000,
    donors: 342,
    listedBy: {
      name: "Rajesh Kumar",
      avatar: "RK",
      phone: "+91 98765 43210",
      email: "rajesh@temple.org",
      role: "Temple Administrator",
    },
  },
  {
    id: "shiva-temple-kanchipuram",
    name: "Ekambareswarar Temple",
    nameTamil: "ஏகாம்பரேஸ்வரர் கோயில்",
    location: "Kanchipuram, Tamil Nadu",
    locationTamil: "காஞ்சிபுரம், தமிழ்நாடு",
    image: temple2,
    description: "Ekambareswarar Temple is one of the five major Shiva temples or Pancha Bootha Sthalams representing the element Earth. The temple has one of the tallest gopurams in India at 59 meters. The temple's history dates back to the Pallava period and has been expanded by the Chola and Vijayanagara kings.",
    descriptionTamil: "ஏகாம்பரேஸ்வரர் கோயில் பஞ்ச பூத ஸ்தலங்களில் ஒன்றாகும், இது நிலத்தை குறிக்கிறது. இக்கோயிலில் இந்தியாவின் மிக உயரமான கோபுரங்களில் ஒன்று உள்ளது.",
    deity: "Lord Shiva (Ekambareswarar)",
    deityTamil: "சிவபெருமான் (ஏகாம்பரேஸ்வரர்)",
    raised: 420000,
    goal: 800000,
    donors: 178,
    listedBy: {
      name: "Sundar Iyer",
      avatar: "SI",
      phone: "+91 94567 12345",
      email: "sundar@kanchitemple.org",
      role: "Head Priest",
    },
  },
  {
    id: "brihadeeswara",
    name: "Brihadeeswara Temple",
    nameTamil: "பிரகதீஸ்வரர் கோயில்",
    location: "Thanjavur, Tamil Nadu",
    locationTamil: "தஞ்சாவூர், தமிழ்நாடு",
    image: temple3,
    description: "The Brihadeeswara Temple, also called the Big Temple, is a UNESCO World Heritage Site built by Raja Raja Chola I between 1003 and 1010 AD. The temple's vimana (tower) is 66 meters high, one of the tallest in the world. The Nandi statue at the entrance weighs 25 tons carved from a single rock.",
    descriptionTamil: "பிரகதீஸ்வரர் கோயில், பெரிய கோயில் என்றும் அழைக்கப்படுகிறது. இது யுனெஸ்கோ உலக பாரம்பரிய தளமாகும்.",
    deity: "Lord Shiva (Brihadeeswara)",
    deityTamil: "சிவபெருமான் (பிரகதீஸ்வரர்)",
    raised: 1200000,
    goal: 2000000,
    donors: 567,
    listedBy: {
      name: "Murugan Pillai",
      avatar: "MP",
      phone: "+91 97654 32100",
      email: "murugan@bigtemple.org",
      role: "Temple Trust Member",
    },
  },
  {
    id: "ramanathaswamy",
    name: "Ramanathaswamy Temple",
    nameTamil: "ராமநாதசுவாமி கோயில்",
    location: "Rameswaram, Tamil Nadu",
    locationTamil: "ராமேஸ்வரம், தமிழ்நாடு",
    image: temple4,
    description: "Ramanathaswamy Temple is one of the twelve Jyotirlinga temples. It has the longest corridor among all Hindu temples in India. The temple's third corridor is the longest in the world at 197 meters. The temple is famous for its 22 sacred wells (Theerthams).",
    descriptionTamil: "ராமநாதசுவாமி கோயில் பன்னிரண்டு ஜோதிர்லிங்க கோயில்களில் ஒன்றாகும். இது இந்தியாவிலுள்ள அனைத்து இந்துக் கோயில்களிலும் மிக நீளமான தூண் வரிசையைக் கொண்டுள்ளது.",
    deity: "Lord Shiva (Ramanathaswamy)",
    deityTamil: "சிவபெருமான் (ராமநாதசுவாமி)",
    raised: 680000,
    goal: 1000000,
    donors: 289,
    listedBy: {
      name: "Venkat Raman",
      avatar: "VR",
      phone: "+91 96543 21098",
      email: "venkat@rameswaram.org",
      role: "Temple Committee Chair",
    },
  },
  {
    id: "shore-temple",
    name: "Shore Temple",
    nameTamil: "கடற்கரை கோயில்",
    location: "Mahabalipuram, Tamil Nadu",
    locationTamil: "மகாபலிபுரம், தமிழ்நாடு",
    image: temple5,
    description: "The Shore Temple is a UNESCO World Heritage Site built during the 8th century under the Pallava dynasty. It is one of the oldest structural stone temples of South India. The temple overlooks the Bay of Bengal and is a remarkable example of Dravidian architecture.",
    descriptionTamil: "கடற்கரை கோயில் ஒரு யுனெஸ்கோ உலக பாரம்பரிய தளமாகும். இது பல்லவ வம்சத்தின் கீழ் 8ஆம் நூற்றாண்டில் கட்டப்பட்டது.",
    deity: "Lord Shiva & Lord Vishnu",
    deityTamil: "சிவபெருமான் & விஷ்ணு பெருமான்",
    raised: 950000,
    goal: 1200000,
    donors: 412,
    listedBy: {
      name: "Arun Selvam",
      avatar: "AS",
      phone: "+91 91234 56789",
      email: "arun@shoretemple.org",
      role: "Heritage Conservation Lead",
    },
  },
  {
    id: "kapaleeshwarar",
    name: "Kapaleeshwarar Temple",
    nameTamil: "கபாலீஸ்வரர் கோயில்",
    location: "Chennai, Tamil Nadu",
    locationTamil: "சென்னை, தமிழ்நாடு",
    image: temple6,
    description: "Kapaleeshwarar Temple is a temple of Shiva located in Mylapore, Chennai. The temple was built around the 7th century CE in Dravidian architecture. The colorful gopuram stands at 40 meters high and is adorned with intricate sculptures depicting Hindu mythology.",
    descriptionTamil: "கபாலீஸ்வரர் கோயில் சென்னையின் மயிலாப்பூரில் அமைந்துள்ள சிவன் கோயிலாகும்.",
    deity: "Lord Shiva (Kapaleeshwarar)",
    deityTamil: "சிவபெருமான் (கபாலீஸ்வரர்)",
    raised: 320000,
    goal: 600000,
    donors: 156,
    listedBy: {
      name: "Lakshmi Narayanan",
      avatar: "LN",
      phone: "+91 98123 45670",
      email: "lakshmi@kapaleeshwarar.org",
      role: "Temple Trustee",
    },
  },
];
