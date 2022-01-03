import { useQuery } from 'react-query';
import api from '../api';
import DualList from '../components/DualList.tsx';
import styled from 'styled-components';

function IndexPage() {
  // Example API request with caching, fetch list of users.
  // See https://react-query.tanstack.com/ for documentation on react-query.
  const { isLoading, error, data } = useQuery('users', () =>
    api.get('/api/users').then((res) => {
      console.log(res);
      return res.data;
    })
  );

  const header = styled.header`
    height: 20;
  `;

  let testArray = [
    {
      id: 1,
      title: 'Speak Up:',
      added: false,
      descriptionShort:
        'You know yourself best. It is OK to tell providers what they can do to make you comfortable. Think about what you will need and be ready to spell it out for them. Practice it out loud to boost your confidence.      ',
      descriptionLong:
        'Why it works: Knowing our voice can be heard gives us power and control. Feeling like we can have some control over what happens decreases anxiety. \n The steps: Think about what you want to say. Medical providers aren’t mind readers and they don’t always know how to help you unless you tell them. No one wants you to have a bad experience, but only you can say what would help. \n \n Still feeling nervous? Practice in front of the mirror, with a friend, or by yourself in the car. Practicing decreases anxiety and increases confidence. \n What you can say: “Like a lot of people, I have a really hard time with needles, but there are some things that can help me. I would really appreciate it if you could (share your plan here)? “',
    },
    {
      id: 2,
      title: 'Block:',
      added: false,
      descriptionShort:
        'Protect yourself from the pain. You can numb the area with an over-the-counter numbing cream or use vibration to interrupt pain signals. Products like Buzzy Bee are incredibly effective. If you can’t get that, even quickly rubbing the spot where you’ll get the vaccine for 30 seconds can be helpful.',
      descriptionLong: `Why it works: Past experiences with pain are often a major factor in needle anxiety. Preventing or reducing the possibility of that pain from the get-go helps improve both the physical and psychological experience, making us more calm and comfortable. Numbing cream stops the signal before it starts. Vibration creates a traffic jam of signals in our nervous system, which prevents the pain signal from reaching our brain (where pain actually happens).
 
        The steps: 
         
        Numbing cream: While doctors can prescribe topical anesthetics (a.k.a. numbing cream), you can also buy them over-the-counter, online, or at a drugstore. Here’s a list of common ones. . Most require some time for full effect (usually 20-30 minutes), so put it on your upper arm before you leave home or bring it with you and put it on while you are waiting. They last a long time (often a few hours) so you don’t need to worry if you end up having to wait a little while. 
         
        Vibration: Hold Buzzy Bee (available here and here) over the place on the arm where the injection will go for at least 30 seconds before the poke, then move it up the arm a bit so the vibration is just above the injection site. This video explains how to use it. If you don’t have Buzzy, rubbing the alcohol swab (used to clean the skin) on the spot for about 30 seconds can also be helpful.
         
        What you can say: “I’d like the vaccine to be in this arm, please. (You can explain you used numbing cream or not…your choice!)” or “This is Buzzy Bee. The vibration helps with the pain. I will hold it on my arm while you do the vaccination below it.”`,
    },
    {
      id: 3,
      title: 'Distract:',
      added: false,
      descriptionShort:
        'Choose to focus on something that makes you feel good. Before and during, do something like listen to music, watch a funny video, or scroll through social media. It’s an incredibly powerful way to keep thoughts and feelings you don’t want at bay.',
      descriptionLong: `Why it works: Ever discover a bruise at the end of the day and have no idea how it got there? Then you know how the power of distraction helps us “turn off” and ignore pain. Changing our focus of attention actually changes the way our brain and body process pain signals.
 
      The steps: Choose the thing that captures your attention and tune out the world around you. You’ve done it a million times before…now you just need to do it on purpose. Doing it while you are waiting keeps the anxiety away, and doing it during the injection helps you ignore any pain signal. After, it can help you calm yourself again. It can help if you tell the person doing the poke that you plan on ignoring them, and just let them do their job. It’s not being rude…it’s a powerful coping skill (and they’re used to people doing this!)!
       
      What you can say: “It helps me when I focus hard on something else. Please don’t talk to me. I’m not trying to be rude…just getting through this.”`,
    },
    {
      id: 4,
      title: 'Breathe:',
      added: false,
      descriptionShort:
        'It’s the ultimate hack of your nervous system, and the best way to take control of your body and your brain. Take deep, slow breaths with a focus on the out-breath. Repeat as needed.',
      descriptionLong: `Why it works: Intentionally taking deep, slow breaths lets us take control of our nervous system. It sends the message to our body and brain to calm down, which automatically lowers our heart rate and blood pressure, allows muscles to relax, and positively changes the way our body processes pain signals to increase comfort.
 
      The steps: Find the right pace that works for you. Take a deep, slow breath in (some people like to inhale through the nose), hold it for a few counts, and then do a slow, controlled breath out. Repeat. Because sometimes it’s useful to follow along, we recommend this video. Many fitness trackers and phone apps also have breathing guides. (And there is good reason they do…it actually works!)`,
    },
    {
      id: 5,
      title: 'Connect:',
      added: false,
      descriptionShort:
        'Having a supportive, trusted person with you—either in person or virtually—can do wonders. Have them talk to you about other things to take the focus off of what is bothering you. This is a great time to crack jokes, tell stories, or whatever works for you.',
      descriptionLong: `Why it works: People with good social support actually feel less pain. Feeling the support of others has the power to lower our blood pressure, slow our heart rate, decrease anxiety, increase confidence and comfort, and give us the motivation to persist in the face of a challenge.
 
      The steps: Find a trusted person and ask them to come along for support and distraction (or to be available to join you virtually). Stress and calm are both contagious, so make sure your person is good at staying cool and collected. Let them know what helps you to talk about, and what you don’t want to talk about. This is a good time for random stories and jokes!
       
      What you can say: “Would you come with me to get my vaccination? I really want to get it done, and you being there would really help make it easier.” or “Would it be alright if I call or text you while I get my vaccination? I really want to get it done, and being on the phone with you would really help make it easier.”`,
    },
    {
      id: 6,
      title: 'Touch:',
      added: false,
      descriptionShort:
        'If it works for you, have a trusted person hold your hand, squeeze your shoulder, or do something else that feels comforting.',
      descriptionLong: `Why it works: Touch positively changes the way our bodies process pain and creates a flood of calming, positive brain chemicals. Physically and emotionally, it helps us feel more comfortable and in control. You also can’t pay attention to too many physical sensations at the same time, so paying attention to the good touch helps you focus on the positive feeling and ignore the poke.
 
      The steps: Ask your trusted person to hold your hand, rub your back, touch your head—whatever feels good and comforting to you.
       
      What you can say: “Could you hold my hand? It really helps.”`,
    },
    {
      id: 7,
      title: 'Filter:',
      added: false,
      descriptionShort:
        'It can be stressful to watch others get their vaccination. You can look away, get an appointment in advance to prevent wait times, or use your phone for distraction. You can always ask to be seated away from the action or ask them to text you when it’s your turn. Choosing whether you watch your own poke or look away is also a great way to take control.',
      descriptionLong: `Why it works: For most people with needle anxiety, seeing needles or anyone getting poked can trigger a learned stress response. Even medical waiting areas can do this. Avoiding those triggers helps us be more calm. For our own poke, some people feel more control when they watch and others prefer to just zoneout. It’s the intentional choice that is powerful.
 
      The steps: Avoid images of needles or being in a place where you could see other people getting their vaccinations. Scheduled private appointments are great, if possible. Have to wait in line? Ask to be seated away from the action and now is a great time to stare at your phone. You can also ask to sit in your car and have them text or call when it is your turn. 
       
      What you can say: “Seeing other people get shots makes me very anxious. Could you please text me when it is my turn so I can wait outside?” OR “Is there a place I can wait where I don’t have to watch other people get their vaccines?”`,
    },
    {
      id: 8,
      title: 'Reward:',
      added: false,
      descriptionShort:
        'Doing hard things deserves a reward. Plan something to treat yourself with afterward, whether big or small. Having something to look forward to is a very powerful thing.',
      descriptionLong: ` Doing hard things deserves a reward. Plan something to treat yourself with afterward, whether big or small. Having something to look forward to is a very powerful thing.`,
    },
    {
      id: 9,
      title: 'Feeling Faint?',
      added: false,
      descriptionShort:
        'Passing out is a very common concern, and can be a natural (if annoying) response of the nervous system. If this is an issue for you, you can use some simple techniques to prevent it from happening. Squeeze your leg and abdominal muscles, lie down, and/or drink plenty of water. The vibration from the Buzzy Bee product also helps prevent fainting.',
      descriptionLong: `Why it works: People pass out because the parasympathetic "calming nerve" lowers their blood pressure too much. It’s all about getting the blood back to the brain. Positioning our bodies to increase the blood flow to our brain, and pumping our blood through muscle tension helps do that. Also, the vibration of Buzzy Bee may have a sympathetic "exciting" impulse, which also helps prevent fainting.
 
      The steps: Dehydration makes us more likely to pass out, so be sure you drink plenty of water about an hour before. Caffeinated drinks can also be useful. If you start to feel faint, you can take deep breaths and focus on repeatedly squeezing your leg and glutes (aka butt muscles). Lifting your knees up and/or sitting cross legged can be useful to get blood back to the brain. Lying down (ideally with your feet above your heart) during the injection could be useful, especially if you have a history of fainting or if it would make you feel more comfortable.
      
      What you can say: “I have a history of passing out, and I don’t want that to happen again. It helps when I (lie down/lean back/crouch/whatever you choose). If I tell you I need to lie down, I need to do it quickly to prevent me from falling.”`,
    },
  ];

  //need to implement a state that stores which cards are selected to be on the right.
  //if the card is selected, it should be on the right and not on the left
  //if the card is not selected, it should be on the left and not on the right

  return (
    <div className="container center">
      <div>
        <DualList cardData={testArray}></DualList>
      </div>
    </div>
  );
}

export default IndexPage;
