// Date and Hindu Festival Data
const hinduFestivals2025_2026 = {
    
    '2025-11-05': { en: 'Kartik Purnima', hi: 'कार्तिक पूर्णिमा' },
    
    // December 2025
    '2025-12-01': { en: 'Geeta Jayanti', hi: 'गीता जयंती' },
    '2025-12-04': { en: 'Margashirsha Purnima', hi: 'मार्गशीर्ष पूर्णिमा' },
    
    // January 2026
    '2026-01-10': { en: 'Pausha Putrada Ekadashi', hi: 'पौष पुत्रदा एकादशी' },
    '2026-01-14': { en: 'Makar Sankranti / Pongal', hi: 'मकर संक्रांति / पोंगल' },
    '2026-01-23': { en: 'Vasant Panchami', hi: 'वसंत पंचमी' },
    
    // February 2026
    '2026-02-01': { en: 'Thaipusam', hi: 'थाईपुसम' },
    '2026-02-15': { en: 'Maha Shivaratri', hi: 'महाशिवरात्रि' },
    
    // March 2026
    '2026-03-03': { en: 'Holika Dahan', hi: 'होलिका दहन' },
    '2026-03-04': { en: 'Holi', hi: 'होली' },
    '2026-03-19': { en: 'Ugadi / Gudi Padwa', hi: 'उगादी / गुड़ी पड़वा' },
    '2026-03-27': { en: 'Rama Navami', hi: 'राम नवमी' },
    
    // April 2026
    '2026-04-02': { en: 'Hanuman Jayanti', hi: 'हनुमान जयंती' },
    '2026-04-14': { en: 'Vaisakhi / Tamil New Year', hi: 'वैसाखी / तमिल नववर्ष' },
    '2026-04-19': { en: 'Akshaya Tritiya', hi: 'अक्षय तृतीया' },
    
    // May 2026
    '2026-05-16': { en: 'Savitri Pooja', hi: 'सावित्री पूजा' },
    
    // July 2026
    '2026-07-16': { en: 'Puri Rath Yatra', hi: 'पुरी रथ यात्रा' },
    '2026-07-29': { en: 'Guru Purnima', hi: 'गुरु पूर्णिमा' },
    
    // August 2026
    '2026-08-17': { en: 'Nag Panchami', hi: 'नाग पंचमी' },
    '2026-08-26': { en: 'Onam', hi: 'ओणम' },
    '2026-08-28': { en: 'Raksha Bandhan', hi: 'रक्षा बंधन' },
    
    // September 2026
    '2026-09-04': { en: 'Krishna Janmashtami', hi: 'कृष्ण जन्माष्टमी' },
    '2026-09-14': { en: 'Ganesh Chaturthi', hi: 'गणेश चतुर्थी' },
    
    // October 2026
    '2026-10-11': { en: 'Navaratri Begins', hi: 'नवरात्रि प्रारंभ' },
    '2026-10-20': { en: 'Dussehra', hi: 'दशहरा' },
    '2026-10-29': { en: 'Karwa Chauth', hi: 'करवा चौथ' },
    
    // November 2026
    '2026-11-08': { en: 'Diwali', hi: 'दीपावली' },
    '2026-11-11': { en: 'Bhai Dooj', hi: 'भाई दूज' },
    '2026-11-15': { en: 'Chhath Puja', hi: 'छठ पूजा' },
    '2026-11-24': { en: 'Kartik Purnima', hi: 'कार्तिक पूर्णिमा' },
    
    // December 2026
    '2026-12-16': { en: 'Dhanu Sankranti', hi: 'धनु संक्रांति' },
    '2026-12-20': { en: 'Geeta Jayanti', hi: 'गीता जयंती' }
};

// Function to update date and festival
function updateDateAndFestival() {
    console.log('=== updateDateAndFestival called ===');
    const now = new Date();
    const dateElement = document.getElementById('currentDate');
    const festivalElement = document.getElementById('hinduFestival');
    
    console.log('Date element:', dateElement);
    console.log('Festival element:', festivalElement);
    
    if (!dateElement || !festivalElement) {
        console.error('ERROR: Date or festival element not found!');
        return;
    }
    
    // Format date
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    const formattedDate = now.toLocaleDateString('en-US', options);
    dateElement.textContent = formattedDate;
    dateElement.style.display = 'block';
    console.log('✅ Date updated:', formattedDate);
    
    // Check for Hindu festival - get today's date in local timezone
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const dateKey = `${year}-${month}-${day}`;
    console.log('Looking for festival on:', dateKey);
    console.log('Available festivals:', Object.keys(hinduFestivals2025_2026));
    
    if (hinduFestivals2025_2026[dateKey]) {
        const festival = hinduFestivals2025_2026[dateKey];
        const festivalText = currentLang === 'hi' ? festival.hi : festival.en;
        festivalElement.textContent = `🎉 ${festivalText}`;
        festivalElement.style.display = 'block';
        festivalElement.style.visibility = 'visible';
        festivalElement.style.opacity = '1';
        console.log('✅ TODAY IS FESTIVAL:', festivalText);
    } else {
        console.log('No festival today, checking upcoming...');
        // Check upcoming festival within 7 days
        const upcomingFestival = findUpcomingFestival(now);
        if (upcomingFestival) {
            const daysUntil = Math.ceil((upcomingFestival.date - now) / (1000 * 60 * 60 * 24));
            const festivalText = currentLang === 'hi' 
                ? `आगामी (${daysUntil} दिन): ${upcomingFestival.festival.hi}` 
                : `Upcoming (${daysUntil} days): ${upcomingFestival.festival.en}`;
            festivalElement.textContent = festivalText;
            festivalElement.style.display = 'block';
            festivalElement.style.visibility = 'visible';
            festivalElement.style.opacity = '1';
            console.log('✅ UPCOMING FESTIVAL:', festivalText, 'in', daysUntil, 'days');
        } else {
            festivalElement.textContent = '🕉️ No upcoming festivals';
            festivalElement.style.display = 'block';
            festivalElement.style.visibility = 'visible';
            festivalElement.style.opacity = '1';
            console.log('⚠️ No upcoming festivals found in next 14 days');
        }
    }
}

// Find upcoming festival within 14 days
function findUpcomingFestival(currentDate) {
    const fourteenDaysLater = new Date(currentDate);
    fourteenDaysLater.setDate(fourteenDaysLater.getDate() + 14);
    
    // Create copies to avoid modifying the original dates
    const compareDate = new Date(currentDate);
    compareDate.setHours(0, 0, 0, 0);
    
    const endDate = new Date(fourteenDaysLater);
    endDate.setHours(23, 59, 59, 999);
    
    let nearestFestival = null;
    let minDiff = Infinity;
    
    console.log('Searching for festivals between', compareDate, 'and', endDate);
    
    for (const [dateStr, festival] of Object.entries(hinduFestivals2025_2026)) {
        const festivalDate = new Date(dateStr + 'T00:00:00');
        
        if (festivalDate > compareDate && festivalDate <= endDate) {
            const diff = festivalDate - compareDate;
            console.log('Found upcoming festival:', dateStr, festival, 'in', Math.ceil(diff / (1000 * 60 * 60 * 24)), 'days');
            if (diff < minDiff) {
                minDiff = diff;
                nearestFestival = { date: festivalDate, festival: festival };
            }
        }
    }
    
    return nearestFestival;
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
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing...');
    generateZodiacCards();
    initializeEventListeners();
    initializeModalListeners();
    handleFileUploads();
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
    // Reset form and show it again
    const form = document.getElementById('kundaliForm');
    if (form) {
        form.reset();
        form.style.display = 'block';
    }
    
    // Remove any success messages
    const successMessage = document.querySelector('.form-success-message');
    if (successMessage) {
        successMessage.remove();
    }
    
    // Reset file name display
    const fileNameDisplay = document.querySelector('.file-name');
    if (fileNameDisplay) {
        fileNameDisplay.textContent = currentLang === 'en' ? 'No file chosen' : 'कोई फाइल नहीं चुनी गई';
    }
    
    // Close modal
    kundaliModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// This function is replaced by handleFileUploads() below

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
    
    // Form submits naturally - no JavaScript intervention
    // FormSubmit will handle the submission and redirect
}

// This broken code block is removed

// File Upload Handling - with protection against duplicate initialization
let fileUploadInitialized = false;

function handleFileUploads() {
    if (fileUploadInitialized) {
        console.log('File upload already initialized, skipping...');
        return;
    }
    
    console.log('Initializing file upload...');
    const fileInput = document.getElementById('kundaliFile');
    const uploadButton = document.getElementById('uploadButton');
    const fileNameDisplay = document.getElementById('fileName');
    
    if (!fileInput || !uploadButton || !fileNameDisplay) {
        console.error('Required file upload elements not found!');
        return;
    }

    // Make sure the upload button works - using onclick to prevent duplicates
    uploadButton.onclick = function(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log('Upload button clicked');
        fileInput.click();
    };

    // Handle file selection - using onchange to prevent duplicates
    fileInput.onchange = function(e) {
        console.log('File selected:', this.files);
        if (this.files && this.files[0]) {
            const file = this.files[0];
            const maxSize = 10 * 1024 * 1024; // 10MB
            const allowedTypes = [
                'application/pdf',
                'image/jpeg',
                'image/png',
                'image/jpg'
            ];
            
            // Check file type
            if (!allowedTypes.includes(file.type)) {
                alert(currentLang === 'en' 
                    ? 'Invalid file type. Please upload PDF, JPG, or PNG files.' 
                    : 'अमान्य फ़ाइल प्रकार। कृपया PDF, JPG, या PNG फ़ाइलें अपलोड करें।');
                this.value = '';
                return;
            }
            
            // Check file size
            if (file.size > maxSize) {
                alert(currentLang === 'en'
                    ? 'File is too large. Maximum size is 10MB.'
                    : 'फ़ाइल बहुत बड़ी है। अधिकतम आकार 10MB है।');
                this.value = '';
                return;
            }

            // Update UI
            const fileName = file.name.length > 30 
                ? file.name.substring(0, 15) + '...' + file.name.substring(file.name.length - 12)
                : file.name;
            
            // Update the display
            const fileSize = (file.size / (1024 * 1024)).toFixed(2);
            fileNameDisplay.textContent = `${fileName} (${fileSize} MB)`;
            fileNameDisplay.style.color = '#10b981';
            
            // Update button text
            const changeBtnText = uploadButton.querySelector('span');
            if (changeBtnText) {
                changeBtnText.textContent = currentLang === 'en' ? 'Change File' : 'फ़ाइल बदलें';
            }
        }
    };
    
    fileUploadInitialized = true;
    console.log('✅ File upload handler initialized');
}

// Form Submission - Contact Form
function handleFormSubmission() {
    // Test if forms are being detected
    const contactForm = document.getElementById('contactForm');
    const kundaliForm = document.getElementById('kundaliForm');
    
    console.log('Contact form found:', contactForm ? 'YES' : 'NO');
    console.log('Kundali form found:', kundaliForm ? 'YES' : 'NO');
    
    if (contactForm) {
        console.log('Contact form action:', contactForm.action);
        console.log('Contact form method:', contactForm.method);
    }
    
    if (kundaliForm) {
        console.log('Kundali form action:', kundaliForm.action);
        console.log('Kundali form method:', kundaliForm.method);
    }
    
    // Forms submit naturally via HTML - no JavaScript intervention
    console.log('✅ Forms configured for native HTML submission');
}

// Call modal listeners in initialize
function initializeEventListeners() {
    // Initialize file uploads
    handleFileUploads();
    handleFormSubmission();
    
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
    
    // Contact form is handled by handleFormSubmission() function above
    
    // Aarti modal close
    aartiModalClose.addEventListener('click', closeAartiModal);
    aartiModal.addEventListener('click', (e) => {
        if (e.target === aartiModal) {
            closeAartiModal();
        }
    });
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
    },
    hanuman_chalisa: {
        title: 'श्री हनुमान चालीसा',
        text: `दोहा:
श्री गुरु चरन सरोज रज, निज मन मुकुर सुधारि।
बरनउं रघुबर बिमल जसु, जो दायक फल चारि॥

बुद्धिहीन तनु जानिके, सुमिरौं पवन-कुमार।
बल बुद्धि बिद्या देहु मोहिं, हरहु कलेस बिकार॥

चौपाई:
जय हनुमान ज्ञान गुन सागर। जय कपीस तिहुं लोक उजागर॥
राम दूत अतुलित बल धामा। अंजनि-पुत्र पवनसुत नामा॥

महाबीर बिक्रम बजरंगी। कुमति निवार सुमति के संगी॥
कंचन बरन बिराज सुबेसा। कानन कुंडल कुंचित केसा॥

हाथ बज्र औ ध्वजा बिराजै। कांधे मूंज जनेऊ साजै॥
शंकर सुवन केसरी नंदन। तेज प्रताप महा जग बंदन॥

विद्यावान गुनी अति चातुर। राम काज करिबे को आतुर॥
प्रभु चरित्र सुनिबे को रसिया। राम लखन सीता मन बसिया॥

सूक्ष्म रूप धरि सियहिं दिखावा। बिकट रूप धरि लंक जरावा॥
भीम रूप धरि असुर संहारे। रामचंद्र के काज संवारे॥

लाय सजीवन लखन जियाये। श्री रघुबीर हरषि उर लाये॥
रघुपति कीन्ही बहुत बड़ाई। तुम मम प्रिय भरतहि सम भाई॥

सहस बदन तुम्हरो जस गावैं। अस कहि श्रीपति कंठ लगावैं॥
सनकादिक ब्रह्मादि मुनीसा। नारद सारद सहित अहीसा॥

जम कुबेर दिगपाल जहां ते। कबि कोबिद कहि सके कहां ते॥
तुम उपकार सुग्रीवहिं कीन्हा। राम मिलाय राज पद दीन्हा॥

तुम्हरो मंत्र बिभीषन माना। लंकेश्वर भए सब जग जाना॥
जुग सहस्र जोजन पर भानु। लील्यो ताहि मधुर फल जानू॥

प्रभु मुद्रिका मेलि मुख माहीं। जलधि लांघि गये अचरज नाहीं॥
दुर्गम काज जगत के जेते। सुगम अनुग्रह तुम्हरे तेते॥

राम दुआरे तुम रखवारे। होत न आज्ञा बिनु पैसारे॥
सब सुख लहै तुम्हारी सरना। तुम रक्षक काहू को डर ना॥

आपन तेज सम्हारो आपै। तीनों लोक हांक तें कांपै॥
भूत पिसाच निकट नहिं आवै। महाबीर जब नाम सुनावै॥

नासै रोग हरे सब पीरा। जपत निरंतर हनुमत बीरा॥
संकट तें हनुमान छुड़ावै। मन क्रम बचन ध्यान जो लावै॥

सब पर राम तपस्वी राजा। तिन के काज सकल तुम साजा॥
और मनोरथ जो कोई लावै। सोइ अमित जीवन फल पावै॥

चारों जुग परताप तुम्हारा। है परसिद्ध जगत उजियारा॥
साधु संत के तुम रखवारे। असुर निकंदन राम दुलारे॥

अष्ट सिद्धि नौ निधि के दाता। अस बर दीन जानकी माता॥
राम रसायन तुम्हरे पासा। सदा रहो रघुपति के दासा॥

तुम्हरे भजन राम को पावै। जनम जनम के दुख बिसरावै॥
अंत काल रघुबर पुर जाई। जहां जन्म हरि भक्त कहाई॥

और देवता चित्त न धरई। हनुमत सेइ सर्ब सुख करई॥
संकट कटै मिटै सब पीरा। जो सुमिरै हनुमत बलबीरा॥

जय जय जय हनुमान गोसाईं। कृपा करहु गुरुदेव की नाईं॥
जो सत बार पाठ कर कोई। छूटहि बंदि महा सुख होई॥

जो यह पढ़ै हनुमान चालीसा। होय सिद्धि साखी गौरीसा॥
तुलसीदास सदा हरि चेरा। कीजै नाथ हृदय मह डेरा॥

दोहा:
पवन तनय संकट हरन, मंगल मूरति रूप।
राम लखन सीता सहित, हृदय बसहु सुर भूप॥`
    },
    aditya_hrudayam: {
        title: 'आदित्य हृदयम्',
        text: `ततो युद्धपरिश्रान्तं समरे चिन्तया स्थितम्।
रावणं चाग्रतो दृष्ट्वा युद्धाय समुपस्थितम्॥

दैवतैश्च समागम्य द्रष्टुमभ्यागतो रणम्।
उपगम्याब्रवीद्राममगस्त्यो भगवान् ऋषिः॥

राम राम महाबाहो श्रृणु गुह्यं सनातनम्।
येन सर्वानरीन् वत्स समरे विजयिष्यसि॥

आदित्यहृदयं पुण्यं सर्वशत्रुविनाशनम्।
जयावहं जपेन्नित्यमक्षय्यं परमं शिवम्॥

सर्वमङ्गलमाङ्गल्यं सर्वपापप्रणाशनम्।
चिन्ताशोकप्रशमनमायुर्वर्धनमुत्तमम्॥

रश्मिमन्तं समुद्यन्तं देवासुरनमस्कृतम्।
पूजयस्व विवस्वन्तं भास्करं भुवनेश्वरम्॥

सर्वदेवात्मको ह्येष तेजस्वी रश्मिभावनः।
एष देवासुरगणाँल्लोकान् पाति गभस्तिभिः॥

एष ब्रह्मा च विष्णुश्च शिवः स्कन्दः प्रजापतिः।
महेन्द्रो धनदः कालो यमः सोमो ह्यपां पतिः॥

पितरो वसवः साध्या ह्यश्विनौ मरुतो मनुः।
वायुर्वह्निः प्रजा प्राणः ऋतुकर्ता प्रभाकरः॥

आदित्यः सविता सूर्यः खगः पूषा गभस्तिमान्।
सुवर्णसदृशो भानुः हिरण्यरेता दिवाकरः॥

हरिदश्वः सहस्रार्चिः सप्तसप्तिर्मरीचिमान्।
तिमिरोन्मथनः शम्भुः त्वष्टा मार्तण्डकोंऽशुमान्॥

हिरण्यगर्भः शिशिरस्तपनोऽहरकरो रविः।
अग्निगर्भोऽदितेः पुत्रः शंखः शिशिरनाशनः॥

व्योमनाथस्तमोभेदी ऋग्यजुः सामपारगः।
घनवृष्टिरपां मित्रो विन्ध्यवीथीप्लवंगमः॥

आतपी मण्डली मृत्युः पिङ्गलः सर्वतापनः।
कविर्विश्वो महातेजा रक्तः सर्वभवोद्भवः॥

नक्षत्रग्रहताराणामधिपो विश्वभावनः।
तेजसामपि तेजस्वी द्वादशात्मन् नमोऽस्तु ते॥

नमः पूर्वाय गिरये पश्चिमायाद्रये नमः।
ज्योतिर्गणानां पतये दिनाधिपतये नमः॥

जयाय जयभद्राय हर्यश्वाय नमो नमः।
नमो नमः सहस्रांशो आदित्याय नमो नमः॥

नम उग्राय वीराय सारङ्गाय नमो नमः।
नमः पद्मप्रबोधाय प्रचण्डाय नमोऽस्तु ते॥

ब्रह्मेशानाच्युतेशाय सूर्यायादित्यवर्चसे।
भास्वते सर्वभक्षाय रौद्राय वपुषे नमः॥

तमोघ्नाय हिमघ्नाय शत्रुघ्नायामितात्मने।
कृतघ्नघ्नाय देवाय ज्योतिषां पतये नमः॥

तप्तचामीकराभाय हरये विश्वकर्मणे।
नमस्तमोऽभिनिघ्नाय रुचये लोकसाक्षिणे॥

नाशयत्येष वै भूतं तदेव सृजति प्रभुः।
पायत्येष तपत्येष वर्षत्येष गभस्तिभिः॥

एष सुप्तेषु जागर्ति भूतेषु परिनिष्ठितः।
एष एवाग्निहोत्रं च फलं चैवाग्निहोत्रिणाम्॥

देवाश्च क्रतवश्चैव क्रतूनां फलमेव च।
यानि कृत्यानि लोकेषु सर्वेषु परमं प्रभुः॥

एनमापत्सु कृच्छ्रेषु कान्तारेषु भयेषु च।
कीर्तयन् पुरुषः कश्चिन्नावसीदति राघव॥

पूजयस्वैनमेकाग्रो देवदेवं जगत्पतिम्।
एतत्त्रिगुणितं जप्त्वा युद्धेषु विजयिष्यसि॥

अस्मिन् क्षणे महाबाहो रावणं त्वं जहिष्यसि।
एवमुक्त्वा तदागस्त्यो जगाम च यथागतम्॥

एतच्छ्रुत्वा महातेजा नष्टशोकोऽभवत्तदा।
धारयामास सुप्रीतो राघवः प्रयतात्मवान्॥

आदित्यं प्रेक्ष्य जप्त्वा तु परं हर्षमवाप्तवान्।
त्रिराचम्य शुचिर्भूत्वा धनुरादाय वीर्यवान्॥

रावणं प्रेक्ष्य हृष्टात्मा युद्धाय समुपागमत्।
सर्वयत्नेन महता वधे तस्य धृतोऽभवत्॥

अथ रविरवदन्निरीक्ष्य रामं मुदितमनाः परमं प्रहृष्यमाणः।
निशिचरपतिसंक्षयं विदित्वा सुरगणमध्यगतो वचस्त्वरेति॥

॥ इति श्रीमद्रामायणे आदित्यहृदयम् सम्पूर्णम् ॥`
    },
    namami_shamishan: {
        title: 'श्रीरुद्राष्टकम्',
        text: `श्रीरुद्राष्टकम्,
विभुं व्यापकं ब्रह्मवेदस्वरूपम्।
निजं निर्गुणं निर्विकल्पं निरीहं,
चिदाकाशमाकाशवासं भजे ऽहम्॥१॥

निराकारमोंकारमूलं तुरीयं,
गिरा ज्ञान गोतीतमीशं गिरीशम्।
करालं महाकाल कालं कृपालं,
गुणागार संसारपारं नतोऽहम्॥२॥

तुषाराद्रि संकाश गौरं गभीरं,
मनोभूत कोटि प्रभा श्री शरीरम्।
स्फुरन्मौलि कल्लोलिनी चारु गङ्गा,
लसद्भालबालेन्दु कण्ठे भुजङ्गा॥३॥

चलत्कुण्डलं भ्रू सुनेत्रं विशालं,
प्रसन्नाननं नीलकण्ठं दयालम्।
मृगाधीशचर्माम्बरं मुण्डमालं,
प्रियं शङ्करं सर्वनाथं भजामि॥४॥

प्रचण्डं प्रकृष्टं प्रगल्भं परेशं,
अखण्डं अजं भानुकोटि प्रकाशम्।
त्रयःशूल निर्मूलनं शूलपाणिं,
भजे ऽहं भवानीपतिं भावगम्यम्॥५॥

कलातीत कल्याण कल्पान्तकारी,
सदा सज्जनानन्ददाता पुरारी।
चिदानन्द संदोह मोहापहारी,
प्रसीद प्रसीद प्रभो मन्मथारी॥६॥

न यावद् उमानाथ पादारविन्दं,
भजन्तीह लोके परे वा नराणाम्।
न तावत् सुखं शान्ति सन्तापनाशं,
प्रसीद प्रभो सर्वभूताधिवासम्॥७॥

न जानामि योगं जपं नैव पूजां,
नतोऽहं सदा सर्वदा शम्भु तुभ्यम्।
जरा जन्म दुःखौघ तातप्यमानं,
प्रभो पाहि आपन्नमामीश शम्भो॥८॥

रुद्राष्टकमिदं प्रोक्तं विप्रेण हरतोषये।
ये पठन्ति नरा भक्त्या तेषां शम्भुः प्रसीदति॥

॥ इति श्री शङ्कराचार्य विरचितं नमामि शमीशान स्तोत्रम् सम्पूर्णम् ॥`
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

// ============================================
// 🔒 COPY PROTECTION - Prevents Content Theft
// ============================================

// Disable keyboard shortcuts for copying, saving, printing, inspect element
document.addEventListener('keydown', function(e) {
    // Disable Ctrl+C, Cmd+C (Copy)
    if ((e.ctrlKey || e.metaKey) && e.key === 'c') {
        e.preventDefault();
        return false;
    }
    
    // Disable Ctrl+X, Cmd+X (Cut)
    if ((e.ctrlKey || e.metaKey) && e.key === 'x') {
        e.preventDefault();
        return false;
    }
    
    // Disable Ctrl+A, Cmd+A (Select All)
    if ((e.ctrlKey || e.metaKey) && e.key === 'a') {
        e.preventDefault();
        return false;
    }
    
    // Disable Ctrl+S, Cmd+S (Save)
    if ((e.ctrlKey || e.metaKey) && e.key === 's') {
        e.preventDefault();
        return false;
    }
    
    // Disable Ctrl+P, Cmd+P (Print)
    if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
        e.preventDefault();
        return false;
    }
    
    // Disable Ctrl+U, Cmd+U (View Source)
    if ((e.ctrlKey || e.metaKey) && e.key === 'u') {
        e.preventDefault();
        return false;
    }
    
    // Disable F12, Ctrl+Shift+I, Cmd+Option+I (Inspect Element)
    if (e.key === 'F12' || 
        ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'I') ||
        ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'i')) {
        e.preventDefault();
        return false;
    }
    
    // Disable Ctrl+Shift+J, Cmd+Option+J (Console)
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'J' || e.key === 'j')) {
        e.preventDefault();
        return false;
    }
    
    // Disable Ctrl+Shift+C, Cmd+Option+C (Inspect)
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'C') {
        e.preventDefault();
        return false;
    }
});

// Disable copy event
document.addEventListener('copy', function(e) {
    e.preventDefault();
    return false;
});

// Disable cut event
document.addEventListener('cut', function(e) {
    e.preventDefault();
    return false;
});

// Disable paste (optional - uncomment if needed)
// document.addEventListener('paste', function(e) {
//     e.preventDefault();
//     return false;
// });

// Disable print
window.addEventListener('beforeprint', function(e) {
    e.preventDefault();
    return false;
});

// Disable screenshot detection (some browsers)
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    return false;
});

// Detect and prevent developer tools
let devToolsOpen = false;
const detectDevTools = () => {
    const threshold = 160;
    if (window.outerWidth - window.innerWidth > threshold || 
        window.outerHeight - window.innerHeight > threshold) {
        if (!devToolsOpen) {
            devToolsOpen = true;
            document.body.innerHTML = '<div style="display:flex; justify-content:center; align-items:center; height:100vh; font-size:24px; color:#fff; background:#1a1a40;">⚠️ Developer tools detected. Please close to continue.</div>';
        }
    }
};

// Check for dev tools every 1 second
setInterval(detectDevTools, 1000);

// Disable text selection via CSS will be added
document.body.style.userSelect = 'none';
document.body.style.webkitUserSelect = 'none';
document.body.style.mozUserSelect = 'none';
document.body.style.msUserSelect = 'none';

// Disable drag and drop
document.addEventListener('dragstart', function(e) {
    e.preventDefault();
    return false;
});

// Add copyright watermark to console
console.log('%c⚠️ COPYRIGHT PROTECTED', 'color: red; font-size: 20px; font-weight: bold;');
console.log('%c© 2025 AstroVidya | आकाशीय विद्या', 'color: gold; font-size: 16px;');
console.log('%c🔒 All content is protected. Unauthorized copying is prohibited.', 'color: orange; font-size: 14px;');
console.log('%cContact: astrovidyashukla@gmail.com | +91 7905521101', 'color: white; font-size: 12px;');

// ============================================
// END OF COPY PROTECTION
// ============================================

// Expose functions globally
window.scrollToSection = scrollToSection;
window.openKundaliModal = openKundaliModal;
window.copyUPI = copyUPI;
window.openAartiModal = openAartiModal;
