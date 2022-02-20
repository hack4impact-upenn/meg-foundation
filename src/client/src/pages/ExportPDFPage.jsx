import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import colors from '../common/Colors';
import PrintFunction from '../components/DownloadFunction.js';
import more_icon from '../images/show_more.png';
import less_icon from '../images/show_less.png';
import plus_icon from '../images/plus.png';
import minus_icon from '../images/minus.png';
import placeholder_image from '../images/placeholder.png';
import { boltzmannDependencies } from 'mathjs';
import { placeholder } from '@babel/types';
import fontNormal from '../fonts/Brandon Grotesque/Brandon_reg.otf';
import fontBold from '../fonts/Brandon Grotesque/Brandon_bld.otf';

import {
  Page,
  Text,
  Image,
  View,
  Document,
  StyleSheet,
  PDFViewer,
  Font,
  Link,
} from '@react-pdf/renderer';

Font.register({
  family: 'BrandonGrotesque',
  src: fontNormal,
});

Font.register({
  family: 'BrandonGrotesqueBold',
  src: fontBold,
});

let cardData = [
  {
    id: 1,
    title: 'Speak Up:',
    added: false,
    descriptionShort: [
      'You know yourself best. Definitely tell providers what they can do to make you comfortable. Think about what you want to do and be ready to spell it out for them.  Practice it to build up confidence.',
    ],
    whyItWorks: [
      `This one seems super obvious but knowing our voice can be heard gives us power and control. Asking for and getting what we want makes us feel better.  Having control over what happens makes us feel less anxious.`,
    ],
    steps: [
      `Think about what you want to say. Medical providers aren’t mind readers and they don’t always know how to help you unless you tell them. No one wants you to have a bad experience, but only you can say what would actually help.`,
      `Still feeling nervous? Practice in front of the mirror, with a friend, or by yourself in the car.  It’ll help you feel more confident.`,
    ],
    whatYouCanSay: [
      `“I really hate needles and they freak me out, but there are some things that make it easier.  I would really appreciate it if you could (share your plan here)."`,
    ],
  },
  {
    id: 2,
    title: 'Block:',
    added: false,
    descriptionShort: [
      `Protect yourself from the pain. You can numb the area with an over-the-counter numbing cream or use vibration to interrupt pain signals. Products like `,
      {
        text: `Buzzy Bee`,
        url: 'https://paincarelabs.com/',
      },
      ` work great. If you can’t get that, even quickly rubbing the spot where you’ll get the vaccine for 30 seconds before the poke can be helpful.`,
    ],
    whyItWorks: [
      `It turns out that to experience pain, a pain signal has to reach our brain. Numbing cream stops the signal before it starts. Vibration creates a traffic jam of signals in our nervous system, which prevents the pain signal from reaching our brain. Bonus:  we know we are DOING something that prevents pain, it also helps us feel less anxious and freaked out.`,
    ],
    steps: [
      `Numbing cream: While doctors can prescribe numbing cream, you can also buy them over-the-counter, online, or at a drugstore. Here’s a list of common ones. It can take a while for them to work (usually 20-30 minutes), so put it on your upper arm before you leave home or bring it with you and put it on while you are waiting. They last a long time (often a few hours) so you don’t need to worry if you end up having to wait a little while. `,
      {
        text: `This video`,
        url: 'https://youtu.be/YrnSUJWU_30',
      },
      ` breaks it down.`,
      `Vibration: Hold Buzzy Bee `,
      {
        text: `(available here)`,
        url: 'https://paincarelabs.com/buzzy/',
      },
      ` over the place on the arm where the injection will go for about 30 seconds before the poke, then move it up the arm a bit so the vibration is just above the injection site. `,
      {
        text: `This video`,
        url: 'https://youtu.be/gsj5Mjlmm5k',
      },
      ` explains how to use it. If you don’t have Buzzy, rubbing the alcohol swab (used to clean the skin) on the spot for about 30 seconds can also be helpful.`,
    ],
    whatYouCanSay: [
      `“I want the vaccine to be in this arm, please.” (You can explain you used numbing cream or not…your choice!) or “This is Buzzy Bee. The vibration helps with the pain. I’m going to hold it on my arm while you do the vaccination below it.”`,
    ],
  },
  {
    id: 3,
    title: 'Distract:',
    added: false,
    descriptionShort: [
      `You already know how easy it can be to tune out the rest of the world when you’re staring at your phone, so let’s use that’s superpower for the forces of good! Choose to focus on something that makes you feel relaxed. Before AND during, do something like listen to music, watch a funny video, or scroll through social media. It keeps away any thoughts and feelings you’d rather not have.`,
    ],
    whyItWorks: [
      `Ever discover a bruise at the end of the day and have no idea how it got there? Then you know how the power of distraction helps us “turn off” and ignore pain. Changing our focus of attention actually changes the way our brain and body process pain signals.`,
    ],
    steps: [
      `Figure out what you want to pay attention to, and tune out the world around you. You’ve done it a million times before… now you just need to do it on purpose. Doing it while you are waiting keeps the anxiety away, and doing it during the injection helps you ignore any pain signal. After, it can help you calm yourself again. It can help if you tell the person doing the poke that you plan on ignoring them, and just let them do their job. It’s not being rude… it’s a powerful coping skill (and they’re used to people doing this)!`,
    ],
    whatYouCanSay: [
      `“It helps me when I focus hard on something else. Please don’t talk to me. I’m not trying to be rude… just getting through this.” or “Can you talk to me about ANYTHING but the shot right now?  It helps distract me.”`,
    ],
  },
  {
    id: 4,
    title: 'Breathe:',
    added: false,
    descriptionShort: [
      'It’s the ultimate hack of your nervous system, and the best way to take control of your body and your brain. Take deep, slow breaths with a focus on the out-breath. Repeat as needed.',
    ],
    whyItWorks: [
      'Intentionally taking deep, slow breaths lets us take control of our nervous system. It sends the message to our body and brain to calm down, which automatically lowers our heart rate and blood pressure, makes your muscles relax, and totally changes the way your body processes a pain signal.',
    ],
    steps: [
      `Find the right pace that works for you. Take a deep, slow breath in (some people like to inhale through the nose), hold it for a few seconds, and then do a slow, controlled breath out. Repeat. Because sometimes it’s useful to follow along, we recommend `,
      {
        text: `this video`,
        url: `https://youtu.be/ozf5CxbIugU`,
      },
      `. Many fitness trackers and phone apps also have breathing guides. (And there is good reason they do… it actually works!)`,
    ],
  },
  {
    id: 5,
    title: 'Connect:',
    added: false,
    descriptionShort: [
      `Not surprising: having other humans we like around us makes us feel better.  Bring one of your favorite people and have them talk to you about literally ANYTHING but the shot. This is a great time to crack jokes, tell embarrassing stories, or whatever random stuff works for you.`,
    ],
    whyItWorks: [
      'When we are around supportive people, we actually feel less pain…weird, right?? Being around our favorite people lowers our blood pressure, slows our heart rate, makes us feel less anxious and more confident. We feel more comfortable…in our bodies and our brains!',
    ],
    steps: [
      `Ask one of your friends to come along for your needle poke adventure. Turns out both stress AND calm are both contagious, so make sure this is the chill (not the super stressed) friend… the one who is good at staying cool and collected. Let them know what helps you to talk about, and what you DON’T want to talk about. This is a good time for random stories and jokes!`,
    ],
    whatYouCanSay: [
      `“Hey… would you come with me to get my vaccination? I really want to get it done, and you being there would really help make it easier.” or “Would it be alright if I call or text you while I get my vaccination? I really want to get it done, and being on the phone with you would really help make it easier.”`,
    ],
  },
  {
    id: 6,
    title: 'Touch:',
    added: false,
    descriptionShort: [
      `If it works for you, have a trusted person hold your hand, squeeze your shoulder, rub your back, or touch you in any way that feels comforting.`,
    ],
    whyItWorks: [
      `When people touch us, it creates a flood of calming, positive brain chemicals. It feels GOOD (and it changes the way our bodies process pain) so we feel more comfortable and in control. FUN FACT: Our brains can’t pay attention to too many physical sensations at the same time, so paying attention to the good touch helps you ignore the poke.`,
    ],
    steps: [
      `Ask your trusted person to hold your hand, rub your back, touch your head—whatever feels good and comforting to you.`,
    ],
    whatYouCanSay: ['“Could you hold my hand? It really helps.”'],
  },
  {
    id: 7,
    title: 'Filter:',
    added: false,
    descriptionShort: [
      `Watching other people get shots or freaking out about getting a shot tends to trigger our own panicky feelings, so let’s not stare, okay? You can look away, make sure you have an appointment so you don’t have to wait, and/or use something like your phone for distraction. If you do have to wait, ask to be seated away from the action or ask them to text you when it’s your turn while you wait outside. Choosing whether you watch your own poke or look away is also a great way to take control.`,
    ],
    whyItWorks: [
      `For most people with needle anxiety, seeing needles or anyone getting poked can trigger a “learned stress response” (aka auto-freakout). Sometimes just being around anything even kind of medical can do this. Avoiding those triggers helps us be more calm. For your own shot, some people feel more control when they watch and others prefer to just zone out. Getting to CHOOSE what you want to do is a powerful anxiety killer.`,
    ],
    steps: [
      `Avoid pictures of needles or being in a place where you could see other people getting shots. Scheduled private appointments are great, if you can swing it (and yes, you should totally ask). Have to wait in line? Ask to sit away from the action and now is a GREAT time to stare at your phone. You can also ask to sit in your car and have them text or call when it is your turn.`,
    ],
    whatYouCanSay: [
      `“Seeing other people get shots makes me super nervous. Could you please text me when it is my turn so I can wait outside?” OR “Is there a place I can wait where I don’t have to watch other people get their vaccines?”`,
    ],
  },
  {
    id: 8,
    title: 'Reward:',
    added: false,
    descriptionShort: [
      `Doing hard things deserves a reward! Figure out what would motivate you to power through, and set up a plan to make sure it happens when you’re all done. Donut? Hanging with friends? Favorite dinner? Make it something good.`,
    ],
    whyItWorks: [
      `When we choose a reward, we get to focus on something POSITIVE, and that shift in attention actually changes how we feel. Focusing on what happens NEXT, takes us out of the suck of the current situation and helps us power through.`,
    ],
    steps: [
      ` Just think about what would work for you. You know best what would help you push yourself over the finish line!`,
    ],
  },
  {
    id: 9,
    title: 'Feeling Faint?',
    added: false,
    descriptionShort: [
      `Some people worry about passing out. It can be a natural (and really annoying) response of the nervous system. Here are some ways to keep yourself from taking a header: squeeze your leg and stomach muscles, lie down, and/or drink plenty of water. (Pro tip: the vibration from the Buzzy Bee product also helps prevent fainting.)`,
    ],
    whyItWorks: [
      `People pass out because the parasympathetic "calming nerve" lowers their blood pressure too much. Your body REALLY wants there to be enough blood in your brain so it goes vertical. You can beat it at it’s own game by lying down on purpose and/or using your muscles to pump your blood up to your brain.  FUN FACT: the vibration of `,
      {
        text: `Buzzy Bee`,
        url: 'https://paincarelabs.com/buzzy/',
      },
      ` can also do something funky to your nervous system that helps prevent fainting.`,
    ],
    steps: [
      `Dehydration makes us more likely to keep over, so drink a ton of water about an hour before. Caffeine can also help.  If you start to feel faint, take deep breaths and focus on repeatedly squeezing your leg and glutes (aka butt muscles). Lifting your knees up and/or sitting cross legged can be useful to get blood back to the brain. Lying down (hopefully with your feet above your heart) during the injection could be useful, especially if you have a history of fainting or if it would make you feel more comfortable.`,
    ],
    whatYouCanSay: [
      `“I sometimes pass out when I do this, and I don’t want that to happen again. It helps when I (lie down/lean back/crouch/whatever you choose). If I tell you I need to lie down, I need to do it fast so I don’t fall.”`,
    ],
  },
];

const styles = StyleSheet.create({
  page: {
    // flexDirection: 'col',
    // maxWidth: '595pt',
    paddingTop: '20mm',
    paddingLeft: '20mm',
    paddingRight: '20mm',
    paddingBottom: '15mm',
    fontFamily: 'BrandonGrotesque',
    // width: 'calc(595pt - 50mm)'
    // display: 'flex'
  },
  card: {
    // flexDirection: 'col',
    // justifyContent: 'space-between',
    fontSize: '14px',
    // color: '#585858',
    // marginLeft: '10px',
    marginTop: '10px',
    marginBottom: '20px',
    // marginRight: '10px',
    flexGrow: 1,
    // display: 'flex'
  },
  descriptionShort: {
    // overflow: 'hidden',
    fontSize: '11px',
    // color: '#585858',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'start',
    // display: 'flex',
    flexGrow: 1,
  },
  descriptionLong: {
    fontSize: '11px',
    // color: '#585858',
    display: 'flex',
    // flexWrap: 'wrap',
    marginTop: '10px',
    // fontFamily: 'BrandonTextMedium',
  },
  image: {
    width: '115px',
    height: '115px',
  },
  title: {
    fontSize: '16px',
    textAlign: 'center',
    fontFamily: 'BrandonGrotesqueBold',
  },
  cardsList: {
    // padding: '5px 10px',
    // margin: '0 auto',
    // padding: '20px',
    // position: 'relative',
    // paddingRight: '20px'
  },
});

const PDFCard = ({
  title,
  descriptionShort,
  whyItWorks,
  steps,
  whatYouCanSay,
}) => {
  let descriptionShortText = descriptionShort;
  for (let i = 0; i < descriptionShortText.length; i++) {
    const curr = descriptionShortText[i];
    if (curr.url) {
      descriptionShortText[i] = <Link src={curr.url}>{curr.text}</Link>;
    }
  }

  let whyItWorksText = whyItWorks;
  if (whyItWorks) {
    for (let i = 0; i < whyItWorksText.length; i++) {
      const curr = whyItWorksText[i];
      if (curr.url) {
        whyItWorksText[i] = <Link src={curr.url}>{curr.text}</Link>;
      }
    }
  }

  let stepsText = steps;
  if (steps) {
    for (let i = 0; i < stepsText.length; i++) {
      const curr = stepsText[i];
      if (curr.url) {
        stepsText[i] = <Link src={curr.url}>{curr.text}</Link>;
      }
    }
  }

  let whatYouCanSayText = whatYouCanSay;
  if (whatYouCanSay) {
    for (let i = 0; i < whatYouCanSayText.length; i++) {
      const curr = whatYouCanSayText[i];
      if (curr.url) {
        whatYouCanSayText[i] = <Link src={curr.url}>{curr.text}</Link>;
      }
    }
  }

  return (
    <View style={styles.card}>
      <View wrap={false}>
        {/* Move wrap=false to view below in order to make it possible for cards to split with page breaks */}
        <View style={styles.descriptionShort}>
          <Image style={[styles.image]} src={placeholder_image} />
          <View style={{ flexGrow: 1 }}>
            <Text
              style={{
                paddingBottom: '10px',
                paddingLeft: '10px',
                fontFamily: 'BrandonGrotesqueBold',
              }}
            >
              {title}
            </Text>
            <Text
              style={{
                paddingLeft: '10px',
                flexGrow: 1,
              }}
            >
              {descriptionShortText}
            </Text>
          </View>
        </View>
      </View>
      <View wrap={false}>
        {whyItWorksText && (
          <Text style={styles.descriptionLong}>
            {' '}
            <Text style={{ fontFamily: 'BrandonGrotesqueBold' }}>
              Why it works:{' '}
            </Text>
            {whyItWorksText}
          </Text>
        )}
        {stepsText && (
          <Text style={styles.descriptionLong}>
            {' '}
            <Text style={{ fontFamily: 'BrandonGrotesqueBold' }}>
              The steps:{' '}
            </Text>
            {stepsText}
          </Text>
        )}
        {whatYouCanSayText && (
          <Text style={styles.descriptionLong}>
            {' '}
            <Text style={{ fontFamily: 'BrandonGrotesqueBold' }}>
              What you can say:{' '}
            </Text>
            {whatYouCanSayText}
          </Text>
        )}
      </View>
    </View>
  );
};

const PDFCardList = ({ selectedCards, title }) => {
  const allCards = selectedCards.map((item, id) => (
    <PDFCard
      key={id}
      title={item.title}
      descriptionShort={item.descriptionShort}
      whyItWorks={item.whyItWorks}
      steps={item.steps}
      whatYouCanSay={item.whatYouCanSay}
    />
  ));

  return (
    <View>
      <View style={styles.title}>
        <Text>{title}</Text>
      </View>
      <View style={styles.cardsList}>{allCards}</View>
      <View style={{ textAlign: 'center', fontSize: '11px' }}>
        <Link src="https://www.megfoundationforpain.org/">
          Want to Know More? Click Here
        </Link>
      </View>
    </View>
  );
};

const PDF = ({ selectedCards }) => {
  return (
    <Document>
      <Page style={styles.page}>
        <PDFCardList selectedCards={selectedCards} title={'Your Plan'} />
      </Page>
    </Document>
  );
};

const PDFView = () => {
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <PDFViewer width="100%" height="100%">
        <PDF selectedCards={cardData} />
      </PDFViewer>
    </div>
  );
};

export default PDF;
