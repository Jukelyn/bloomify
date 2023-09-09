document.addEventListener("DOMContentLoaded", function () {
    // Function to update the label text
    function updateLabel() {
        const inputLabel = document.querySelector('label[for="inputField"]');
        const currentTime = new Date();
        const hour = currentTime.getHours();

        // Define an array of labels to cycle through
        const questions = [
            "What are some ways in which your physical or mental health improved over the past year?",
            "Can you recall a time where someone in your life went above and beyond to support your health and well-being?",
            "In what ways has your mental health journey been supported by friends, family, or mental health professionals?",
            "Who or what has been your biggest source of emotional support during challenging health-related experiences? How did their presence or actions make a difference for you?",
            "What self-care habits or rituals have you been practicing regularly to maintain a healthy body and mind?",
            "List in detail a time where you overcame a health challenge or achieved a wellness goal. ",
            "Reflect on the simple pleasures of good health, like the ability to breathe deeply, move freely, or enjoy your favorite foods without restrictions. How does acknowledging these everyday blessings fill you with gratitude for your overall health and wellness?",
            "Who in your family has been a consistent source of love and support throughout your life, and how have they positively influenced you?",
            "Can you recall a specific moment when a family member's sacrifice or selflessness made a significant impact on your life? How did their actions inspire gratitude in you?",
            "What family traditions or rituals do you cherish the most, and why are they important to you?",
            "Think about a challenging time in your life when a family member provided emotional or practical support. How did their presence or assistance make a difference for you?",
            "Who in your family has been a role model for you, and what qualities or lessons have you learned from them that you're grateful for?",
            "Reflect on your childhood and the lessons you received from your parents or caregivers. What valuable insights or skills did they impart that you appreciate today?",
            "Have you experienced a family gathering or reunion that left you feeling grateful for the bond you share with your relatives? What made that experience special?",
            "Consider the daily gestures of love and care that you receive from your family members. Which of these small acts of kindness do you find most heartwarming and why?",
            "How has your family's support impacted your personal and professional achievements? What role have they played in your journey to success?",
            "In moments of difficulty or uncertainty, who in your family has been a pillar of strength and stability? How has their unwavering support influenced your gratitude for your family ties?",
            "What is a significant achievement in your life that you are particularly proud of?",
            "What personal strengths or skills have you developed or grown in over the years that have led to your accomplishments? How thankful are you for the growth and progress you've made?",
            "Can you recall a specific moment when you achieved a long-held dream or aspiration? What emotions and gratitude did you experience when that dream became a reality?",
            "Have you ever received recognition or awards for your achievements? How does external validation impact your feelings of gratitude for your hard work and dedication?",
            "Reflect on the achievements of others that have inspired or motivated you. How do you express gratitude for the positive influence they've had on your life and goals?",
            "Consider your educational journey and the knowledge and skills you've acquired. How does your appreciation for your education and personal growth contribute to your overall sense of gratitude?",
            "In moments of self-reflection, how do you express gratitude to yourself for your dedication, resilience, and determination in pursuing your achievements? List a few ways you could express gratitude to yourself if you don't already.",
            "What natural landscapes or environments have left you feeling awestruck and grateful for the beauty of our planet? Describe a specific memory or place.",
            "Reflect on the small, everyday ways in which you interact with the environment. What eco-friendly habits or practices are you thankful for in your daily life?",
            "Have you ever participated in an environmental conversation or project? How did that experience deepen your gratitude for the natural world?",
            "Reflect on the seasons and the changes they bring. What aspects of each season do you appreciate the most, and how do these natural cycles remind you to be grateful for the environment?",
            "Can you recall a time when you witnessed the positive impact of a sustainable or green initiative in your community? How did this experience foster gratitude for a cleaner and healthier environment?",
            "Reflect on the importance of clean air and water for our well-being. How does access to these essential resources make you grateful for the environment's role in sustaining life?",
            "In moments of solitude or mindfulness, how do you express gratitude for the Earth's gifts, from breathtaking sunsets to tranquil forests? What practices help you connect more deeply with the natural world and its importance in your life? Think of some ways you can implement this expression of gratitude if you do not have one already.",
            "What is an item in your life holds significant sentimental value, and how does it evoke feelings of gratitude when you look at or use it?",
            "Reflect on a time when you received a thoughtful gift from someone. How did their gesture of generosity make you feel grateful for the people and things in your life?",
            "Consider the basic necessities you have access to daily, such as shelter, clothing, and food. How does acknowledging these essentials foster gratitude for the comforts they provide?",
            "Reflect on the technological devices you use regularly. How have these tools enhanced your life, and in what ways are you thankful for their capabilities?",
            "Think about the books, art, or music that have brought you joy and inspiration. How do these cultural possessions enrich your life, and how does that make you feel grateful?",
            "Have you ever had to get rid of a material possession? What did you learn from that experience, and how has it influenced your gratitude for the things you still have left?",
            "Consider the hobbies or interests that bring you happiness and fulfillment. How do the materials or equipment associated with these activities contribute to your sense of gratitude for your passions?",
            "Reflect on your home environment and the items that make it uniquely yours. What aspects of your living space evoke gratitude for the comfort and security it provides?",
            "In moments of reflection or mindfulness, how do you express gratitude for the material possessions in your life, recognizing that they are a reflection of your journey and the opportunities you've had?",
            "Think about your local community. Are there specific individuals or organizations that have made a positive impact on your life or the lives of others? How does their presence inspire gratitude in you?",
            "Have you ever participated in community service or volunteer work? What moments or experiences during your involvement filled you with gratitude for the opportunity to give back?",
            "Reflect on a time when your community came together to support one another during a crisis or challenging situation. How did this collective effort deepen your appreciation for your community?",
            "Consider your neighborhood or town's unique characteristics and amenities. What aspects of your community make you feel thankful for where you live?",
            "Have you made meaningful friendships or connections within your community? How have these relationships enriched your life, and how do they remind you to be grateful for your social bonds?",
            "Think about local businesses or services that have played a role in your daily life. How does supporting these establishments make you grateful for the sense of belonging and interconnectedness within your community?",
            "Reflect on community events or celebrations you've attended. What positive experiences or memories have these gatherings created, and how do they foster a sense of gratitude for the shared moments?",
            "Consider the diversity and inclusivity of your community. How does the presence of different cultures, backgrounds, and perspectives contribute to your gratitude for the richness of community life?",
            "Have you ever been the recipient of kindness or assistance from a neighbor or community member in a time of need? How did their support inspire gratitude for the sense of unity within your community?",
            "Reflect on the educational institutions in your community, such as schools, libraries, or learning centers. How have these resources positively influenced your life or the lives of others, and how does that make you feel grateful?",
            "Have you ever had the opportunity to engage in a creative or artistic endeavor within your community, like participating in a local art show or theater production? How did this involvement foster gratitude for the vibrant cultural scene in your area?",
            "Consider the local parks, green spaces, or natural areas in your community. How do these places provide you with moments of solace and connection to nature, evoking feelings of gratitude?",
            "Reflect on the local traditions and customs that are unique to your community. How do these cultural practices instill a sense of pride and gratitude for the cultural heritage you share with others?",
            "Consider the sense of safety and security provided by your community's first responders, such as police, firefighters, and emergency medical personnel. How does their service make you feel grateful for their dedication and sacrifice?",
            "Reflect on the ways your community celebrates and supports its youth, whether through education, sports, or extracurricular activities. How does this investment in the younger generation evoke gratitude for the community's future?"


            // TODO: Add more question here
        ];

        // Calculate the index based on the current hour
        const labelIndex = hour % questions.length;

        // Set the label text to the selected label
        inputLabel.textContent = questions[labelIndex];
    }

    // Initial label update
    updateLabel();

    // Update the label every hour ( we can change this to each day for "production" later)
    setInterval(updateLabel, 3600000); // 3600000 ms = 1hr
});
