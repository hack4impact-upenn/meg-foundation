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
import '../fonts/Brandon Text/BrandonText-Black.otf';
import '../fonts/Brandon Text/BrandonText-Regular.otf';
import '../fonts/Brandon Text/BrandonText-Medium.otf';

import {
  Page,
  Text,
  Image,
  View,
  Document,
  StyleSheet,
  PDFViewer,
  Font,
} from '@react-pdf/renderer';

Font.register({
  family: 'BrandonTextMedium',
  src: '/fonts/Brandon Text/BrandonText-Medium.otf',
});

const selectedCardss = [
  {
    id: 1,
    title: 'Speak Up:',
    descriptionShort:
      'You know yourself best. It is OK to tell providers what they can do to make you comfortable. Think about what you will need and be ready to spell it out for them. Practice it out loud to boost your confidence.      ',
    descriptionLong:
      'Why it works: Knowing our voice can be heard gives us power and control. Feeling like we can have some control over what happens decreases anxiety. \n \n The steps: \n Think about what you want to say. Medical providers aren’t mind readers and they don’t always know how to help you unless you tell them. No one wants you to have a bad experience, but only you can say what would help. \n \n Still feeling nervous? Practice in front of the mirror, with a friend, or by yourself in the car. Practicing decreases anxiety and increases confidence. \n What you can say: “Like a lot of people, I have a really hard time with needles, but there are some things that can help me. I would really appreciate it if you could (share your plan here)?',
  },
  {
    id: 2,
    title: 'Card 2',
    descriptionShort: 'This is a short description',
    descriptionLong:
      'This is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a',
  },
  {
    id: 3,
    title: 'Card 3',
    descriptionShort: 'This is a short description',
    descriptionLong:
      'This is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long descriptionThis is a long description',
  },
  {
    id: 4,
    title: 'Card 4',
    descriptionShort: 'This is a short description',
    descriptionLong: 'This is a long description',
  },
];

const styles = StyleSheet.create({
  page: {
    // flexDirection: 'col',
    // maxWidth: '595pt',
    paddingTop: '20mm',
    paddingLeft: '20mm',
    paddingRight: '30mm',
    paddingBottom: '15mm',
    fontFamily: 'BrandonTextMedium',
    // width: 'calc(595pt - 50mm)'
    // display: 'flex'
  },
  card: {
    // flexDirection: 'col',
    // justifyContent: 'space-between',
    fontSize: '14px',
    // color: '#585858',
    marginLeft: '20px',
    marginTop: '10px',
    marginBottom: '40px',
    marginRight: '10px',
    flexGrow: 1,
    // display: 'flex'
  },
  descriptionShort: {
    // overflow: 'hidden',
    fontSize: '11px',
    // color: '#585858',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
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
    // fontFamily: 'BrandonTextMedium',
  },
  cardsList: {
    // padding: '5px 10px',
    // margin: '0 auto',
    // padding: '20px',
    // position: 'relative',
    // paddingRight: '20px'
  },
});

const PDFCard = ({ title, descriptionShort, descriptionLong }) => {
  return (
    <View style={styles.card} wrap={false}>
      <Text style={{ paddingBottom: '10px' }}>{title}</Text>
      {/* Move wrap=false to view below in order to make it possible for cards to split with page breaks */}
      <View style={styles.descriptionShort}>
        <Image style={[styles.image]} src={placeholder_image} />
        <Text
          style={{
            paddingLeft: '10px',
            flexGrow: 1,
          }}
        >
          {descriptionShort}
        </Text>
      </View>
      <Text style={styles.descriptionLong}>{descriptionLong}</Text>
    </View>
  );
};

const PDFCardList = ({ selectedCards, title }) => {
  const allCards = selectedCards.map((item, id) => (
    <PDFCard
      key={id}
      title={item.title}
      descriptionShort={item.descriptionShort}
      descriptionLong={item.descriptionLong}
    />
  ));

  return (
    <View>
      <View style={styles.title}>
        <Text>{title}</Text>
      </View>
      <View style={styles.cardsList}>{allCards}</View>
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

const PDFView = ({ selectedCards }) => {
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <PDFViewer width="100%" height="100%">
        <PDF cardData={cardData} />
      </PDFViewer>
    </div>
  );
};

export default PDF;
