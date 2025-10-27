// Date and Hindu Festival Data
const hinduFestivals2024_2025 = {
    '2024-10-26': { en: 'Ahoi Ashtami', hi: 'अहोई अष्टमी' },
    '2024-10-31': { en: 'Diwali', hi: 'दीपावली' },
    '2024-11-01': { en: 'Govardhan Puja', hi: 'गोवर्धन पूजा' },
    '2024-11-02': { en: 'Bhai Dooj', hi: 'भाई दूज' },
    '2024-11-15': { en: 'Kartik Purnima', hi: 'कार्तिक पूर्णिमा' },
    '2024-11-15': { en: 'Dev Deepawali', hi: 'देव दीपावली' },
    '2024-12-23': { en: 'Dhanu Sankranti', hi: 'धनु संक्रांति' },
    '2025-01-13': { en: 'Lohri', hi: 'लोहड़ी' },
    '2025-01-14': { en: 'Makar Sankranti', hi: 'मकर संक्रांति' },
    '2025-01-25': { en: 'Vasant Panchami', hi: 'वसंत पंचमी' },
    '2025-02-26': { en: 'Maha Shivaratri', hi: 'महाशिवरात्रि' },
    '2025-03-14': { en: 'Holi', hi: 'होली' },
    '2025-03-30': { en: 'Ugadi', hi: 'उगादी' },
    '2025-04-06': { en: 'Ram Navami', hi: 'राम नवमी' },
    '2025-04-10': { en: 'Mahavir Jayanti', hi: 'महावीर जयंती' },
    '2025-04-13': { en: 'Baisakhi', hi: 'बैसाखी' },
    '2025-05-12': { en: 'Buddha Purnima', hi: 'बुद्ध पूर्णिमा' },
    '2025-06-22': { en: 'Rath Yatra', hi: 'रथ यात्रा' },
    '2025-08-09': { en: 'Nag Panchami', hi: 'नाग पंचमी' },
    '2025-08-16': { en: 'Raksha Bandhan', hi: 'रक्षा बंधन' },
    '2025-08-27': { en: 'Janmashtami', hi: 'जन्माष्टमी' },
    '2025-09-05': { en: 'Ganesh Chaturthi', hi: 'गणेश चतुर्थी' },
    '2025-10-02': { en: 'Navratri Begins', hi: 'नवरात्रि प्रारंभ' },
    '2025-10-11': { en: 'Dussehra', hi: 'दशहरा' },
    '2025-10-20': { en: 'Karwa Chauth', hi: 'करवा चौथ' }
};

// Function to update date and festival
function updateDateAndFestival() {
    const now = new Date();
    const dateElement = document.getElementById('currentDate');
    const festivalElement = document.getElementById('hinduFestival');
    
    if (!dateElement || !festivalElement) return;
    
    // Format date
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    const formattedDate = now.toLocaleDateString('en-US', options);
    dateElement.textContent = formattedDate;
    
    // Check for Hindu festival
    const dateKey = now.toISOString().split('T')[0]; // Format: YYYY-MM-DD
    
    if (hinduFestivals2024_2025[dateKey]) {
        const festival = hinduFestivals2024_2025[dateKey];
        const festivalText = currentLang === 'hi' ? festival.hi : festival.en;
        festivalElement.textContent = festivalText;
        festivalElement.style.display = 'block';
    } else {
        // Check upcoming festival within 7 days
        const upcomingFestival = findUpcomingFestival(now);
        if (upcomingFestival) {
            const festivalText = currentLang === 'hi' 
                ? `आगामी: ${upcomingFestival.festival.hi}` 
                : `Upcoming: ${upcomingFestival.festival.en}`;
            festivalElement.textContent = festivalText;
            festivalElement.style.display = 'block';
        } else {
            festivalElement.style.display = 'none';
        }
    }
}

// Find upcoming festival within 7 days
function findUpcomingFestival(currentDate) {
    const sevenDaysLater = new Date(currentDate);
    sevenDaysLater.setDate(currentDate.getDate() + 7);
    
    for (const [dateStr, festival] of Object.entries(hinduFestivals2024_2025)) {
        const festivalDate = new Date(dateStr);
        if (festivalDate > currentDate && festivalDate <= sevenDaysLater) {
            return { date: festivalDate, festival: festival };
        }
    }
    return null;
}

// Zodiac data with English and Hindi content
const zodiacData = [
    {
        name: { en: 'Aries', hi: 'मेष' },
        symbol: '♈',
        dates: { en: 'Mar 21 - Apr 19', hi: '21 मार्च - 19 अप्रैल' },
        element: { en: 'Fire', hi: 'अग्नि' },
        ruling: { en: 'Mars', hi: 'मंगल' },
        traits: { 
            en: 'Courageous, determined, confident, enthusiastic, optimistic, honest, passionate',
            hi: 'साहसी, दृढ़निश्चयी, आत्मविश्वासी, उत्साही, आशावादी, ईमानदार, भावुक'
        },
        description: {
            en: 'Aries are natural-born leaders with an independent spirit. They are passionate, motivated, and confident leaders who build community with their cheerful disposition and relentless determination.',
            hi: 'मेष राशि के जातक स्वभाविक नेता होते हैं जो स्वतंत्र भावना से भरे होते हैं। वे भावुक, प्रेरित और आत्मविश्वासी नेता होते हैं जो अपने हंसमुख स्वभाव और अटूट दृढ़ संकल्प से समुदाय का निर्माण करते हैं।'
        }
    },
    {
        name: { en: 'Taurus', hi: 'वृषभ' },
        symbol: '♉',
        dates: { en: 'Apr 20 - May 20', hi: '20 अप्रैल - 20 मई' },
        element: { en: 'Earth', hi: 'पृथ्वी' },
        ruling: { en: 'Venus', hi: 'शुक्र' },
        traits: {
            en: 'Reliable, patient, practical, devoted, responsible, stable',
            hi: 'विश्वसनीय, धैर्यवान, व्यावहारिक, समर्पित, जिम्मेदार, स्थिर'
        },
        description: {
            en: 'Taurus is an earth sign represented by the bull. Like their celestial spirit animal, Taureans enjoy relaxing in serene, bucolic environments surrounded by soft sounds, soothing aromas, and succulent flavors.',
            hi: 'वृषभ एक पृथ्वी राशि है जो बैल द्वारा दर्शायी जाती है। अपने आकाशीय आत्मा पशु की तरह, वृषभ राशि वाले शांत, ग्रामीण वातावरण में आराम करना पसंद करते हैं।'
        }
    },
    {
        name: { en: 'Gemini', hi: 'मिथुन' },
        symbol: '♊',
        dates: { en: 'May 21 - Jun 20', hi: '21 मई - 20 जून' },
        element: { en: 'Air', hi: 'वायु' },
        ruling: { en: 'Mercury', hi: 'बुध' },
        traits: {
            en: 'Gentle, affectionate, curious, adaptable, quick learner',
            hi: 'कोमल, स्नेही, जिज्ञासु, अनुकूलनशील, तेज सीखने वाले'
        },
        description: {
            en: 'Have you ever been so busy that you wished you could clone yourself just to get everything done? Gemini is the sign of the twins and that perfectly represents their dual nature.',
            hi: 'क्या आप कभी इतने व्यस्त रहे हैं कि आपने चाहा हो कि आप खुद की प्रतिकृति बना सकें? मिथुन जुड़वाँ बच्चों की राशि है जो उनके दोहरे स्वभाव को दर्शाती है।'
        }
    },
    {
        name: { en: 'Cancer', hi: 'कर्क' },
        symbol: '♋',
        dates: { en: 'Jun 21 - Jul 22', hi: '21 जून - 22 जुलाई' },
        element: { en: 'Water', hi: 'जल' },
        ruling: { en: 'Moon', hi: 'चंद्र' },
        traits: {
            en: 'Tenacious, loyal, emotional, sympathetic, persuasive',
            hi: 'दृढ़, वफादार, भावुक, सहानुभूतिपूर्ण, प्रेरक'
        },
        description: {
            en: 'Cancer is a cardinal water sign. Cancers are highly intuitive and their psychic abilities manifest in tangible spaces. They are deeply emotional and sensitive.',
            hi: 'कर्क एक मुख्य जल राशि है। कर्क राशि वाले अत्यधिक सहज होते हैं और उनकी मानसिक क्षमताएं मूर्त स्थानों में प्रकट होती हैं।'
        }
    },
    {
        name: { en: 'Leo', hi: 'सिंह' },
        symbol: '♌',
        dates: { en: 'Jul 23 - Aug 22', hi: '23 जुलाई - 22 अगस्त' },
        element: { en: 'Fire', hi: 'अग्नि' },
        ruling: { en: 'Sun', hi: 'सूर्य' },
        traits: {
            en: 'Creative, passionate, generous, warm-hearted, cheerful',
            hi: 'रचनात्मक, भावुक, उदार, गर्मजोश, हंसमुख'
        },
        description: {
            en: 'Bold, intelligent, warm, and courageous, fire sign Leo is a natural leader, ready to blaze a trail, vanquish injustice, and make their mark on the world.',
            hi: 'साहसी, बुद्धिमान, गर्म और साहसी, अग्नि राशि सिंह एक प्राकृतिक नेता है जो एक रास्ता बनाने, अन्याय को मिटाने और दुनिया पर अपनी छाप छोड़ने के लिए तैयार है।'
        }
    },
    {
        name: { en: 'Virgo', hi: 'कन्या' },
        symbol: '♍',
        dates: { en: 'Aug 23 - Sep 22', hi: '23 अगस्त - 22 सितंबर' },
        element: { en: 'Earth', hi: 'पृथ्वी' },
        ruling: { en: 'Mercury', hi: 'बुध' },
        traits: {
            en: 'Loyal, analytical, kind, hardworking, practical',
            hi: 'वफादार, विश्लेषणात्मक, दयालु, मेहनती, व्यावहारिक'
        },
        description: {
            en: 'Virgo is an earth sign historically represented by the goddess of wheat and agriculture. Virgos are logical, practical, and systematic in their approach to life.',
            hi: 'कन्या एक पृथ्वी राशि है जो ऐतिहासिक रूप से गेहूं और कृषि की देवी द्वारा दर्शायी जाती है। कन्या राशि वाले तार्किक, व्यावहारिक और व्यवस्थित होते हैं।'
        }
    },
    {
        name: { en: 'Libra', hi: 'तुला' },
        symbol: '♎',
        dates: { en: 'Sep 23 - Oct 22', hi: '23 सितंबर - 22 अक्टूबर' },
        element: { en: 'Air', hi: 'वायु' },
        ruling: { en: 'Venus', hi: 'शुक्र' },
        traits: {
            en: 'Cooperative, diplomatic, gracious, fair-minded, social',
            hi: 'सहयोगी, कूटनीतिक, दयालु, निष्पक्ष, सामाजिक'
        },
        description: {
            en: 'Libra is an air sign represented by the scales, the only inanimate object of the zodiac. Libra is obsessed with symmetry and strives to create equilibrium in all areas of life.',
            hi: 'तुला एक वायु राशि है जो तराजू द्वारा दर्शायी जाती है। तुला राशि सममिति के प्रति आसक्त होती है और जीवन के सभी क्षेत्रों में संतुलन बनाने का प्रयास करती है।'
        }
    },
    {
        name: { en: 'Scorpio', hi: 'वृश्चिक' },
        symbol: '♏',
        dates: { en: 'Oct 23 - Nov 21', hi: '23 अक्टूबर - 21 नवंबर' },
        element: { en: 'Water', hi: 'जल' },
        ruling: { en: 'Mars', hi: 'मंगल' },
        traits: {
            en: 'Resourceful, brave, passionate, stubborn, a true friend',
            hi: 'साधन संपन्न, बहादुर, भावुक, जिद्दी, सच्चे मित्र'
        },
        description: {
            en: 'Scorpio is one of the most misunderstood signs of the zodiac. Because of its incredible passion and power, Scorpio is often mistaken for a fire sign.',
            hi: 'वृश्चिक राशिचक्र की सबसे गलत समझी जाने वाली राशियों में से एक है। अपने अविश्वसनीय जुनून और शक्ति के कारण, वृश्चिक को अक्सर अग्नि राशि समझ लिया जाता है।'
        }
    },
    {
        name: { en: 'Sagittarius', hi: 'धनु' },
        symbol: '♐',
        dates: { en: 'Nov 22 - Dec 21', hi: '22 नवंबर - 21 दिसंबर' },
        element: { en: 'Fire', hi: 'अग्नि' },
        ruling: { en: 'Jupiter', hi: 'गुरु' },
        traits: {
            en: 'Generous, idealistic, great sense of humor, optimistic',
            hi: 'उदार, आदर्शवादी, हास्य की महान भावना, आशावादी'
        },
        description: {
            en: 'Represented by the archer, Sagittarians are always on a quest for knowledge. The last fire sign of the zodiac, Sagittarius launches its many pursuits like blazing arrows.',
            hi: 'धनुर्धारी द्वारा दर्शाया गया, धनु राशि वाले हमेशा ज्ञान की खोज में रहते हैं। राशिचक्र की अंतिम अग्नि राशि, धनु अपने कई प्रयासों को धधकते तीरों की तरह शुरू करती है।'
        }
    },
    {
        name: { en: 'Capricorn', hi: 'मकर' },
        symbol: '♑',
        dates: { en: 'Dec 22 - Jan 19', hi: '22 दिसंबर - 19 जनवरी' },
        element: { en: 'Earth', hi: 'पृथ्वी' },
        ruling: { en: 'Saturn', hi: 'शनि' },
        traits: {
            en: 'Responsible, disciplined, self-control, good managers',
            hi: 'जिम्मेदार, अनुशासित, आत्म-नियंत्रण, अच्छे प्रबंधक'
        },
        description: {
            en: 'The last earth sign of the zodiac, Capricorn is represented by the sea goat, a mythological creature with the body of a goat and tail of a fish.',
            hi: 'राशिचक्र की अंतिम पृथ्वी राशि, मकर राशि को समुद्री बकरी द्वारा दर्शाया जाता है, एक पौराणिक प्राणी जिसका शरीर बकरी का और पूंछ मछली की है।'
        }
    },
    {
        name: { en: 'Aquarius', hi: 'कुंभ' },
        symbol: '♒',
        dates: { en: 'Jan 20 - Feb 18', hi: '20 जनवरी - 18 फरवरी' },
        element: { en: 'Air', hi: 'वायु' },
        ruling: { en: 'Uranus', hi: 'यूरेनस' },
        traits: {
            en: 'Progressive, original, independent, humanitarian',
            hi: 'प्रगतिशील, मौलिक, स्वतंत्र, मानवतावादी'
        },
        description: {
            en: 'Despite the "aqua" in its name, Aquarius is actually the last air sign of the zodiac. Aquarius is represented by the water bearer, the mystical healer who bestows water.',
            hi: 'इसके नाम में "जल" होने के बावजूद, कुंभ वास्तव में राशिचक्र की अंतिम वायु राशि है। कुंभ को जल वाहक द्वारा दर्शाया जाता है।'
        }
    },
    {
        name: { en: 'Pisces', hi: 'मीन' },
        symbol: '♓',
        dates: { en: 'Feb 19 - Mar 20', hi: '19 फरवरी - 20 मार्च' },
        element: { en: 'Water', hi: 'जल' },
        ruling: { en: 'Neptune', hi: 'नेप्च्यून' },
        traits: {
            en: 'Compassionate, artistic, intuitive, gentle, wise, musical',
            hi: 'दयालु, कलात्मक, सहज, कोमल, बुद्धिमान, संगीतमय'
        },
        description: {
            en: 'Pisces is the most intuitive, sensitive, and empathetic sign of the entire zodiac. This water sign is ruled by Neptune, the celestial body that governs creativity and dreams.',
            hi: 'मीन पूरे राशिचक्र की सबसे सहज, संवेदनशील और सहानुभूतिपूर्ण राशि है। यह जल राशि नेप्च्यून द्वारा शासित है।'
        }
    }
];

// Language state
let currentLang = 'en';

// DOM Elements
const langToggle = document.getElementById('langToggle');
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
const zodiacGrid = document.getElementById('zodiacGrid');
const zodiacPopup = document.getElementById('zodiacPopup');
const popupClose = document.getElementById('popupClose');
const popupBody = document.getElementById('popupBody');
const contactForm = document.getElementById('contactForm');
const navbar = document.getElementById('navbar');
const kundaliModal = document.getElementById('kundaliModal');
const modalClose = document.getElementById('modalClose');
const kundaliForm = document.getElementById('kundaliForm');
const kundaliFile = document.getElementById('kundaliFile');
const serviceSelect = document.getElementById('serviceSelect');
const contactServiceSelect = document.getElementById('contactServiceSelect');
const aartiModal = document.getElementById('aartiModal');
const aartiModalClose = document.getElementById('aartiModalClose');
const aartiTitle = document.getElementById('aartiTitle');
const aartiText = document.getElementById('aartiText');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    generateZodiacCards();
    initializeEventListeners();
    updateDateAndFestival();
    
    // Update date every minute
    setInterval(updateDateAndFestival, 60000);
});

// Generate Zodiac Cards
function generateZodiacCards() {
    zodiacGrid.innerHTML = '';
    zodiacData.forEach((zodiac, index) => {
        const card = document.createElement('div');
        card.className = 'zodiac-card';
        card.innerHTML = `
            <div class="zodiac-symbol">${zodiac.symbol}</div>
            <div class="zodiac-name">${zodiac.name[currentLang]}</div>
            <div class="zodiac-dates">${zodiac.dates[currentLang]}</div>
        `;
        card.addEventListener('click', () => showZodiacPopup(index));
        zodiacGrid.appendChild(card);
    });
}

// Show Zodiac Popup
function showZodiacPopup(index) {
    const zodiac = zodiacData[index];
    popupBody.innerHTML = `
        <h2>${zodiac.symbol} ${zodiac.name[currentLang]}</h2>
        <p><strong>${currentLang === 'en' ? 'Dates' : 'तिथियाँ'}:</strong> ${zodiac.dates[currentLang]}</p>
        <p><strong>${currentLang === 'en' ? 'Element' : 'तत्व'}:</strong> ${zodiac.element[currentLang]}</p>
        <p><strong>${currentLang === 'en' ? 'Ruling Planet' : 'शासक ग्रह'}:</strong> ${zodiac.ruling[currentLang]}</p>
        <p><strong>${currentLang === 'en' ? 'Traits' : 'गुण'}:</strong> ${zodiac.traits[currentLang]}</p>
        <p><strong>${currentLang === 'en' ? 'Description' : 'विवरण'}:</strong> ${zodiac.description[currentLang]}</p>
    `;
    zodiacPopup.classList.add('active');
}

// Close Popup
function closePopup() {
    zodiacPopup.classList.remove('active');
}

// Toggle Language
function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'hi' : 'en';
    
    // Update button text
    document.querySelector('.lang-text').textContent = currentLang === 'en' ? 'हिंदी' : 'English';
    
    // Update all translatable elements
    document.querySelectorAll('[data-en]').forEach(el => {
        const enText = el.getAttribute('data-en');
        const hiText = el.getAttribute('data-hi');
        
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
            el.placeholder = currentLang === 'en' ? enText : hiText;
        } else if (el.tagName === 'OPTION') {
            // For option elements, update text but preserve value
            el.textContent = currentLang === 'en' ? enText : hiText;
            // Don't set innerHTML, just textContent to preserve value
        } else if (el.tagName === 'SPAN' || el.tagName === 'BUTTON' || el.tagName === 'A') {
            // For inline elements, use textContent to preserve structure
            if (el.children.length === 0) {
                el.textContent = currentLang === 'en' ? enText : hiText;
            } else {
                // If has children (like icon), only update text nodes
                Array.from(el.childNodes).forEach(node => {
                    if (node.nodeType === Node.TEXT_NODE) {
                        node.textContent = currentLang === 'en' ? enText : hiText;
                    }
                });
            }
        } else if (el.classList.contains('poem-line')) {
            // For poem line, use innerHTML to preserve <br> tags
            el.innerHTML = currentLang === 'en' ? enText : hiText;
        } else {
            el.textContent = currentLang === 'en' ? enText : hiText;
        }
    });
    
    // Regenerate zodiac cards
    generateZodiacCards();
    
    // Update date and festival display
    updateDateAndFestival();
}

// Smooth Scroll
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}


// Open Kundali Modal
function openKundaliModal() {
    kundaliModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close Kundali Modal
function closeKundaliModal() {
    kundaliModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Handle file upload display
function handleFileUpload() {
    kundaliFile.addEventListener('change', function(e) {
        const fileName = e.target.files[0]?.name || (currentLang === 'en' ? 'No file chosen' : 'कोई फाइल नहीं चुनी गई');
        const fileNameSpan = document.querySelector('.file-name');
        fileNameSpan.textContent = fileName;
    });
}

// Update service dropdown on language change
function updateServiceDropdown() {
    // Update modal dropdown
    if (serviceSelect) {
        const modalOptions = serviceSelect.querySelectorAll('option');
        modalOptions.forEach(option => {
            const enText = option.getAttribute('data-en');
            const hiText = option.getAttribute('data-hi');
            if (enText && hiText) {
                option.textContent = currentLang === 'en' ? enText : hiText;
            }
        });
    }
    
    // Update contact form dropdown
    if (contactServiceSelect) {
        const contactOptions = contactServiceSelect.querySelectorAll('option');
        contactOptions.forEach(option => {
            const enText = option.getAttribute('data-en');
            const hiText = option.getAttribute('data-hi');
            if (enText && hiText) {
                option.textContent = currentLang === 'en' ? enText : hiText;
            }
        });
    }
}

// Initialize modal event listeners
function initializeModalListeners() {
    // Close modal on X button
    modalClose.addEventListener('click', closeKundaliModal);
    
    // Close modal on outside click
    kundaliModal.addEventListener('click', (e) => {
        if (e.target === kundaliModal) {
            closeKundaliModal();
        }
    });
    
    // Handle form submission
    kundaliForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const fullName = document.getElementById('fullName').value;
        const birthDate = document.getElementById('birthDate').value;
        const birthTime = document.getElementById('birthTime').value;
        const birthPlace = document.getElementById('birthPlace').value;
        const service = document.getElementById('serviceSelect').value;
        const phone = document.getElementById('userPhone').value;
        const email = document.getElementById('userEmail').value;
        const notes = document.getElementById('additionalNotes').value;
        const fileName = document.getElementById('kundaliFile').files[0]?.name || 'No file selected';
        
        // Validate birth date
        const birthDateObj = new Date(birthDate);
        const minDate = new Date('1900-01-01');
        const maxDate = new Date('2025-12-31');
        
        if (birthDateObj < minDate || birthDateObj > maxDate) {
            alert(currentLang === 'en' 
                ? 'Please enter a valid birth date between 1900 and 2025' 
                : 'कृपया 1900 और 2025 के बीच एक वैध जन्म तिथि दर्ज करें');
            return;
        }
        
        // Create mailto link with all data
        const subject = encodeURIComponent('Kundali Upload Request - AstroVidya');
        const body = encodeURIComponent(
            `KUNDALI UPLOAD REQUEST\n\n` +
            `Full Name: ${fullName}\n` +
            `Date of Birth: ${birthDate}\n` +
            `Time of Birth: ${birthTime}\n` +
            `Place of Birth: ${birthPlace}\n` +
            `Service Required: ${service}\n` +
            `Phone: ${phone}\n` +
            `Email: ${email}\n` +
            `File Selected: ${fileName}\n\n` +
            `Additional Notes:\n${notes}\n\n` +
            `Note: Please attach the Kundali file (${fileName}) before sending this email.`
        );
        
        // Open email client
        window.location.href = `mailto:astrovidyashukla@gmail.com?subject=${subject}&body=${body}`;
        
        // Reset and close after a brief delay
        setTimeout(() => {
            kundaliForm.reset();
            document.querySelector('.file-name').textContent = currentLang === 'en' ? 'No file chosen' : 'कोई फाइल नहीं चुनी गई';
            closeKundaliModal();
        }, 500);
    });
    
    // Handle file upload
    handleFileUpload();
}

// Call modal listeners in initialize
function initializeEventListeners() {
    // Language toggle
    langToggle.addEventListener('click', () => {
        toggleLanguage();
        updateServiceDropdown();
    });
    
    // Popup close
    popupClose.addEventListener('click', closePopup);
    zodiacPopup.addEventListener('click', (e) => {
        if (e.target === zodiacPopup) {
            closePopup();
        }
    });
    
    // Hamburger menu
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
    
    // Close mobile menu on link click
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
    
    // Sticky navbar on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Contact form submission with Web3Forms
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const messageDiv = document.getElementById('contactFormMessage');
        const submitButton = contactForm.querySelector('.submit-button');
        
        // Show loading state
        submitButton.disabled = true;
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> <span>Sending...</span>';
        
        try {
            const formData = new FormData(contactForm);
            
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData
            });
            
            const data = await response.json();
            
            if (data.success) {
                // Show success message
                messageDiv.className = 'form-message success';
                messageDiv.textContent = currentLang === 'en' 
                    ? '✅ Thank you! Your message has been sent successfully. We will contact you soon.' 
                    : '✅ धन्यवाद! आपका संदेश सफलतापूर्वक भेज दिया गया है। हम जल्द ही आपसे संपर्क करेंगे।';
                
                // Reset form
                contactForm.reset();
                
                // Hide message after 5 seconds
                setTimeout(() => {
                    messageDiv.className = 'form-message';
                    messageDiv.textContent = '';
                }, 5000);
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            // Show error message
            messageDiv.className = 'form-message error';
            messageDiv.textContent = currentLang === 'en' 
                ? '❌ Sorry, something went wrong. Please try again or contact us at +91 7905521101' 
                : '❌ क्षमा करें, कुछ गलत हो गया। कृपया पुनः प्रयास करें या +91 7905521101 पर संपर्क करें';
        } finally {
            // Reset button
            submitButton.disabled = false;
            submitButton.innerHTML = '<i class="fas fa-paper-plane"></i> <span data-en="Send Message" data-hi="संदेश भेजें">Send Message</span>';
        }
    });
    
    // Aarti modal close
    aartiModalClose.addEventListener('click', closeAartiModal);
    aartiModal.addEventListener('click', (e) => {
        if (e.target === aartiModal) {
            closeAartiModal();
        }
    });
    
    // Initialize modal listeners
    initializeModalListeners();
}

// Aarti Collection
const aartiCollection = {
    ganesh: {
        title: 'गणेश जी की आरती',
        text: `जय गणेश, जय गणेश, जय गणेश देवा।
माता जाकी पार्वती, पिता महादेवा॥
जय गणेश, जय गणेश, जय गणेश देवा।
माता जाकी पार्वती, पिता महादेवा॥

एकदन्त, दयावन्त, चार भुजा धारी।
माथे पर तिलक सोहे, मूषक की सवारी॥
जय गणेश, जय गणेश, जय गणेश देवा।
माता जाकी पार्वती, पिता महादेवा॥

अंधन को आँख देत, कोढ़िन को काया।
बाँझन को पुत्र देत, निर्धन को माया॥
जय गणेश, जय गणेश, जय गणेश देवा।
माता जाकी पार्वती, पिता महादेवा॥

हार चढ़े, फूल चढ़े और चढ़े मेवा।
लड्डूवन का भोग लगे, संत करें सेवा॥
जय गणेश, जय गणेश, जय गणेश देवा।
माता जाकी पार्वती, पिता महादेवा॥

दीनन की लाज रखो, शम्भु सुतवारी।
कामना को पूरा करो, जाऊं बलिहारी॥
जय गणेश, जय गणेश, जय गणेश देवा।
माता जाकी पार्वती, पिता महादेवा॥`
    },
    hanuman: {
        title: 'श्री हनुमान जी की आरती',
        text: `आरती कीजै हनुमान लला की। दुष्ट दलन रघुनाथ कला की॥

जाके बल से गिरिवर काँपे। रोग दोष जाके निकट न झाँके॥

अंजनि पुत्र महा बलदाई। संतन के प्रभु सदा सहाई॥

दे बीरा रघुनाथ पठाये। लंका जारि सिया सुधि लाये॥

लंका सो कोट समुद्र सी खाई। जात पवनसुत बार न लाई॥

लंका जारि असुर संहारे। सियारामजी के काज संवारे॥

लक्ष्मण मूर्छित पड़े सकारे। लाये संजीवन प्राण उबारे॥

पैठि पाताल तोरि जम कारे। अहिरावण की भुजा उखारे॥

बाएँ भुजा असुर दल मारे। दाहिने भुजा सन्त जन तारे॥

सुर नर मुनि जन आरती उतारें। जै जै जै हनुमान उचारें॥

कंचन थार कपूर लौ छाई। आरती करत अंजना माई॥

जो हनुमान जी की आरती गावै। बसि बैकुंठ परम पद पावै॥`
    },
    durga: {
        title: 'माँ दुर्गा जी की आरती',
        text: `जय अम्बे गौरी मैया जय श्यामा गौरी।
तुमको निसदिन ध्यावत हरि ब्रह्मा शिवरी॥

मांग सिन्दूर विराजत टीको मृगमद को।
उज्ज्वल से दोउ नैना चन्द्रवदन नीको॥

कनक समान कलेवर रक्ताम्बर राजै।
रक्तपुष्प गल माला कण्ठन पर साजै॥

केहरि वाहन राजत खड्ग खप्पर धारी।
सुर नर मुनि जन सेवत तिनके दुःखहारी॥

कानन कुण्डल शोभित नासाग्रे मोती।
कोटिक चन्द्र दिवाकर सम राजत ज्योती॥

शुम्भ निशुम्भ विदारे महिषासुर घाती।
धूम्र विलोचन नैना निशदिन मदमाती॥

चण्ड मुण्ड संहारे शोणित बीज हरे।
मधु कैटभ दोउ मारे सुर भयहीन करे॥

ब्रह्माणी रुद्राणी तुम कमला रानी।
आगम निगम बखानी तुम शिव पटरानी॥

चौंसठ योगिनी मंगल गावत नृत्य करत भैरों।
बाजत ताल मृदंगा अरु बाजत डमरू॥

तुम ही जग की माता तुम ही हो भर्ता।
भक्तन की दुःख हर्ता सुख सम्पति कर्ता॥

भुजा चार अति शोभित वर मुद्रा धारी।
मन वांछित फल पावत सेवत नर नारी॥

कंचन थाल विराजत अगर कपूर बाती।
श्री मालकेतु में राजत कोटि रतन ज्योती॥

जय अम्बे गौरी मैया जय श्यामा गौरी।
तुमको निसदिन ध्यावत हरि ब्रह्मा शिवरी॥`
    },
    shiv: {
        title: 'भगवान शिव जी की आरती',
        text: `जय शिव ओंकारा, हर शिव ओंकारा।
ब्रह्मा विष्णु सदाशिव, अर्धांगी धारा॥

एकानन चतुरानन पंचानन राजे।
हंसासन गरुड़ासन वृषवाहन साजे॥

दो भुज चार चतुर्भुज दस भुज ते सोहे।
तीनों रूप निरखता त्रिभुवन जन मोहे॥

अक्षमाला वनमाला मुण्डमाला धारी।
चंदन मृगमद सोहे भाले शशि धारी॥

श्वेताम्बर पीताम्बर बाघम्बर अंगे।
सनकादिक गरुणादिक भूतादिक संगे॥

कर के मध्य कमंडलु चक्र त्रिशूलधारी।
सुखकारी दुःखहारी जगपालन कारी॥

ब्रह्मा विष्णु सदाशिव जानत अविवेका।
प्रणवाक्षर में शोभित ये तीनों एका॥

त्रिगुण स्वामी जी की आरती जो कोई नर गावे।
कहत शिवानंद स्वामी मनवांछित फल पावे॥

जय शिव ओंकारा, हर शिव ओंकारा।
ब्रह्मा विष्णु सदाशिव, अर्धांगी धारा॥`
    },
    lakshmi: {
        title: 'माँ लक्ष्मी जी की आरती',
        text: `ॐ जय लक्ष्मी माता, मैया जय लक्ष्मी माता।
तुमको निशदिन सेवत, हर विष्णु विधाता॥

उमा रमा ब्रह्माणी, तुम ही जग-माता।
सूर्य-चन्द्रमा ध्यावत, नारद ऋषि गाता॥

दुर्गा रूप निरंजनी, सुख सम्पति दाता।
जो कोई तुमको ध्याता, ऋद्धि-सिद्धि धन पाता॥

तुम पाताल-निवासिनी, तुम ही शुभदाता।
कर्म-प्रभाव-प्रकाशिनी, भव-निधि की त्राता॥

जिस घर तुम रहती हो, ताहि में है आनन्द।
सब सम्भव हो जाता, मन नहीं होत खिन्न॥

तुम बिन यज्ञ न होते, वस्त्र न कोई पाता।
खान-पान का वैभव, सब तुमसे आता॥

शुभ-गुण मन्दिर सुन्दर, क्षीरोदधि-जाता।
रत्न चतुर्दश तुम बिन, कोई नहीं पाता॥

महालक्ष्मीजी की आरती, जो कोई नर गाता।
उर आनन्द समाता, पाप उतर जाता॥

ॐ जय लक्ष्मी माता, मैया जय लक्ष्मी माता।
तुमको निशदिन सेवत, हर विष्णु विधाता॥`
    },
    saraswati: {
        title: 'माँ सरस्वती जी की आरती',
        text: `जय सरस्वती माता, मैया जय सरस्वती माता।
सद्गुण वैभव शालिनी, त्रिभुवन विख्याता॥

चन्द्रवदनी पद्मासिनी, द्युतिमन्त द्युति-दाता।
बार-बार हम तुम्हें प्रणाम करें माता॥

तुम ही ज्ञान की देवी, तुम ही मन की राता।
मेरे सर पे हाथ धरो, ज्ञान-धन दाता॥

हम ज्ञान-भक्ति के भूखे, हमें ज्ञान-धन दाता।
आध्यात्म ज्ञान दे माता, भवसागर तर जाता॥

तुम सरस्वती देवी, वीणा वादक-माता।
कर्मों का फल हमको दे दो, शुभ-गुण सुख दाता॥

मातु सदा सुख सम्पति, प्रभु सदा दुःख हारी।
जो ये आरती नित्य करे, सफल होवे नर-नारी॥

जय सरस्वती माता, मैया जय सरस्वती माता।
सद्गुण वैभव शालिनी, त्रिभुवन विख्याता॥`
    }
};

// Open Aarti Modal
function openAartiModal(deity) {
    const aarti = aartiCollection[deity];
    if (aarti) {
        aartiTitle.textContent = aarti.title;
        aartiText.textContent = aarti.text;
        aartiModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

// Close Aarti Modal
function closeAartiModal() {
    aartiModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Copy UPI ID function
function copyUPI() {
    const upiID = '7905521101@paytm';
    navigator.clipboard.writeText(upiID).then(() => {
        alert(currentLang === 'en' 
            ? '✅ UPI ID copied: ' + upiID 
            : '✅ UPI आईडी कॉपी हो गई: ' + upiID);
    }).catch(err => {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = upiID;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        alert(currentLang === 'en' 
            ? '✅ UPI ID copied: ' + upiID 
            : '✅ UPI आईडी कॉपी हो गई: ' + upiID);
    });
}

// Expose functions globally
window.scrollToSection = scrollToSection;
window.openKundaliModal = openKundaliModal;
window.copyUPI = copyUPI;
window.openAartiModal = openAartiModal;
