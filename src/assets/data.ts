import type { Data } from '../types/data';

export const DATA: Data = {
  scenarios: [
    {
      name: 'Attack',
      variants: [
        {
          outcome: 'You Win',
          probability: 90,
          text: 'You growl and the bear runs away whimpering.',
        },
        {
          outcome: 'Game Over',
          probability: 10,
          text: 'You growl but the bear isn\'t intimidated and kills you.',
        },
      ],
    },
    {
      name: 'Bear Encounter',
      variants: [
        {
          outcome: 'Continue',
          probability: 100,
          text: 'You find yourself face to face with a $enemy. <u>What do you do?</u>',
          links: [
            { target: 'Flee' },
            { target: 'Hide' },
            { target: 'Sing to it' },
            { target: 'Play Dead' },
            { target: 'Attack' },
            { target: 'Look Around' },
            { target: 'Climb a Tree' },
            { target: 'Take a Nap' },
            { target: 'Feed It' },
            { target: 'Yell' },
            { target: 'Call a Friend' },
          ],
        },
      ],
    },
    {
      name: 'Call a Friend',
      variants: [
        {
          outcome: 'Game Over',
          probability: 62.5,
          text: 'You call for a friend but sadly you have no friends. The bear cries for you and feels your pain. You die of heartache. The bear gives you a proper burial in his stomach.',
        },
        {
          outcome: 'Game Over',
          probability: 25,
          text: 'You call for a friend but sadly you have no friends. The bear cries for you and feels your pain but bears have gotta eat too. The bear sates his hunger as he wipes away the final tear.',
        },
        {
          outcome: 'You Win',
          probability: 12.5,
          text: 'You call for a friend but sadly you have no friends. The bear cries for you and feels your pain. You form a lasting friendship with a bond stronger than most. You live out the rest of your lives having wonderful adventures together.',
        },
      ],
    },
    {
      name: 'Charge Wall',
      variants: [
        {
          outcome: 'Game Over',
          probability: 80,
          text: 'You charge it, fall over, and the bear kills you.',
        },
        {
          outcome: 'You Win',
          probability: 20,
          text: 'You break through and escape!',
        },
      ],
    },
    {
      name: 'Climb Wall',
      variants: [
        {
          outcome: 'You Win',
          probability: 100,
          text: 'You climb the wall. The bear comes after you and hits into it. You escape!',
        },
      ],
    },
    {
      name: 'Climb a Tree',
      variants: [
        {
          outcome: 'Continue',
          probability: 100,
          text: 'You climb the tree. Which way do you look?',
          links: [
            { display: 'Left', target: 'Tree Left' },
            { display: 'Right', target: 'Tree Right' },
          ],
        },
      ],
    },
    {
      name: 'Dance',
      variants: [
        {
          outcome: 'Game Over',
          probability: 100,
          text: 'You dance, but bugs come and eat your flesh. The bear eats the remains.',
        },
      ],
    },
    {
      name: 'Dislikes Name',
      variants: [
        {
          outcome: 'Game Over',
          probability: 100,
          text: 'Unfortunately you don\'t know the bear\'s favorite name. The bear doesn\'t like your choice. He kills you.',
        },
      ],
    },
    {
      name: 'Don\'t Play Fingerpaints',
      variants: [
        {
          outcome: 'Game Over',
          probability: 100,
          text: 'The bear gets mad and kills you. He plays fingerpaints on your chest.',
        },
      ],
    },
    {
      name: 'Eat Rock',
      variants: [
        {
          outcome: 'Game Over',
          probability: 100,
          text: 'You put the rock in your mouth and choke to death.',
        },
      ],
    },
    {
      name: 'Feed It',
      variants: [
        {
          outcome: 'Continue',
          probability: 100,
          text: 'Which Food?',
          links: [
            { display: 'Peanut Butter', target: 'Feed Peanut Butter' },
            { display: 'Wheaties', target: 'Feed Wheaties' },
          ],
        },
      ],
    },
    {
      name: 'Feed Peanut Butter',
      variants: [
        {
          outcome: 'You Win',
          probability: 50,
          text: 'You feed the bear and his mouth gets stuck. You escape as the bear mumbles for a glass of milk!',
        },
        {
          outcome: 'You Win',
          probability: 50,
          text: 'You feed the bear and his mouth gets stuck. You escape as the bear tries to free his mouth!',
        },
      ],
    },
    {
      name: 'Feed Wheaties',
      variants: [
        {
          outcome: 'Game Over',
          probability: 100,
          text: 'You feed the bear and he becomes a great athlete. He whacks your head off with a tennis racket.',
        },
      ],
    },
    {
      name: 'Fingerpaints',
      variants: [
        {
          outcome: 'Continue',
          probability: 100,
          text: 'You wake up and the bear wants to play fingerpaints. Play fingerpaints?',
          links: [
            { display: 'Yes', target: 'Play Fingerpaints' },
            { display: 'No', target: 'Don\'t Play Fingerpaints' },
          ],
        },
      ],
    },
    {
      name: 'Flee',
      variants: [
        {
          outcome: 'Continue',
          probability: 100,
          text: 'You decide to flee. What pace?',
          links: [{ target: 'Jog' }, { target: 'Run' }],
        },
      ],
    },
    {
      name: 'Game Over',
      variants: [
        {
          outcome: 'None',
          probability: 100,
          text: 'Game Over! Play Again?',
          links: [
            { display: 'Yes', target: 'Bear Encounter' },
            { display: 'No', target: 'Bear Encounter' },
          ],
        },
      ],
    },
    {
      name: 'Get Ye Beaker',
      variants: [
        {
          outcome: 'Game Over',
          probability: 100,
          text: 'You cannot get ye beaker. The bear kills you.',
        },
      ],
    },
    {
      name: 'Hide',
      variants: [
        {
          outcome: 'Continue',
          probability: 100,
          text: 'You decide to hide. Where?',
          links: [{ target: 'Under a Bush' }, { target: 'In the Cave' }],
        },
      ],
    },
    {
      name: 'In the Cave',
      variants: [
        {
          outcome: 'Game Over',
          probability: 100,
          text: 'You walk into the cave. As you\'re walking along you fall down a mineshaft and die.',
        },
      ],
    },
    {
      name: 'Jog',
      variants: [
        {
          outcome: 'You Win',
          probability: 100,
          text: 'You and the bear jog together. When you finish, you both agree that was a refreshing workout.',
        },
      ],
    },
    {
      name: 'Likes Name',
      variants: [
        {
          outcome: 'You Win',
          probability: 100,
          text: 'The bear loves the name $name. You become great friends.',
        },
      ],
    },
    {
      name: 'Look Around',
      variants: [
        {
          outcome: 'Continue',
          probability: 100,
          text: 'You decide to look around. Which direction?',
          links: [
            { display: 'Left', target: 'Look Left' },
            { display: 'Right', target: 'Look Right' },
            { display: 'Back', target: 'Look Back' },
            { display: 'Up', target: 'Look Up' },
            { display: 'Down', target: 'Look Down' },
          ],
        },
      ],
    },
    {
      name: 'Look Back',
      variants: [
        {
          outcome: 'Continue',
          probability: 100,
          text: 'You look back and see a beaker. Do you?',
          links: [{ target: 'Get Ye Beaker' }, { target: 'Dance' }],
        },
      ],
    },
    {
      name: 'Look Down',
      variants: [
        {
          outcome: 'Respawn',
          probability: 50,
          text: 'You look down and see some mushrooms. You eat them and realize they were 1-up mushrooms. The bear kills you.',
        },
        {
          outcome: 'Game Over',
          probability: 50,
          text: 'You look down and see some mushrooms. You eat them and realize they were poisonous. The bear knew this. He won\'t touch your corpse.',
        },
      ],
    },
    {
      name: 'Look Left',
      variants: [
        {
          outcome: 'Continue',
          probability: 100,
          text: 'You look left and see a rock. Do you?',
          links: [{ display: 'Throw it', target: 'Throw Rock' }, { display: 'Eat it', target: 'Eat Rock' }],
        },
      ],
    },
    {
      name: 'Look Right',
      variants: [
        {
          outcome: 'Continue',
          probability: 100,
          text: 'You look right and see a brick wall. Do you? [[Charge it->Charge Wall]] [[Climb it->Climb Wall]]',
          links: [{ display: 'Charge it', target: 'Charge Wall' }, { display: 'Climb it', target: 'Climb Wall' }],
        },
      ],
    },
    {
      name: 'Look Up',
      variants: [
        {
          outcome: 'Game Over',
          probability: 50,
          text: 'You look up and see a meteor hurtling straight for earth. It kills you on impact.',
        },
        {
          outcome: 'Game Over',
          probability: 50,
          text: 'You look up to see a meteor screaming toward earth. Sudden death!',
        },
      ],
    },
    {
      name: 'Napping',
      variants: [
        {
          outcome: 'Continue',
          probability: 100,
          text: 'zzz',
          links: [{ display: 'Continue', target: 'Fingerpaints' }],
        },
      ],
    },
    {
      name: 'Play Dead',
      variants: [
        {
          outcome: 'Game Over',
          probability: 75,
          text: 'You lie down and the bear kills you.',
        },
        {
          outcome: 'Game Over',
          probability: 25,
          text: 'You pull out the board game Dead. After several thrilling rounds, all of which you lose, you accept defeat and succumb to the bear.',
        },
      ],
    },
    {
      name: 'Play Fingerpaints',
      variants: [
        {
          outcome: 'You Win',
          probability: 80,
          text: 'You and the bear play fingerpaints. You have lots of fun!',
        },
        {
          outcome: 'Game Over',
          probability: 20,
          text: 'You and the bear play fingerpaints. You have lots of fun! The bear kills you anyway.',
        },
      ],
    },
    {
      name: 'Run',
      variants: [
        {
          outcome: 'Game Over',
          probability: 100,
          text: 'You run but the bear catches you and kills you.',
        },
      ],
    },
    {
      name: 'Sing to it',
      variants: [
        {
          outcome: 'Continue',
          probability: 100,
          text: 'You decide to sing. Which song?',
          links: [
            { display: 'Faithfully', target: 'Sing Faithfully' },
            { display: 'Under Pressure', target: 'Sing Under Pressure' },
            { display: 'Oh Beary', target: 'Sing Oh Beary' },
            { display: 'Thriller', target: 'Sing Thriller' },
          ],
        },
      ],
    },
    {
      name: 'Sing Faithfully',
      variants: [
        {
          outcome: 'You Win',
          probability: 100,
          text: 'You sing and the bear is forever yours, faithfully. You run away and get married.',
        },
      ],
    },
    {
      name: 'Sing Oh Beary',
      variants: [
        {
          outcome: 'Game Over',
          probability: 100,
          text: 'You sing and the bear holds on, holds onto your neck. You suffocate and die.',
        },
      ],
    },
    {
      name: 'Sing Thriller',
      variants: [
        {
          outcome: 'You Win',
          probability: 100,
          text: 'You sing and the bear is so thrilled he lets you moonwalk to freedom.',
        },
      ],
    },
    {
      name: 'Sing Under Pressure',
      variants: [
        {
          outcome: 'Game Over',
          probability: 100,
          text: 'You sing and the bear puts pressure on your skull and kills you.',
        },
      ],
    },
    {
      name: 'Take a Nap',
      variants: [
        {
          outcome: 'Continue',
          probability: 100,
          text: 'You and the bear lie down and take a nap.',
          links: [{ display: 'Continue', target: 'Napping' }],
        },
      ],
    },
    {
      name: 'Throw Rock',
      variants: [
        {
          outcome: 'Game Over',
          probability: 100,
          text: 'You throw it and it hits the bear. He kills you in his rage.',
        },
      ],
    },
    {
      name: 'Tree Left',
      variants: [
        {
          outcome: 'Game Over',
          probability: 100,
          text: 'You look left and see a pile of splendifferous delkrams. As you wonder what a delkram is, the bear climbs the tree and kills you.',
        },
      ],
    },
    {
      name: 'Tree Right',
      variants: [
        {
          outcome: 'Game Over',
          probability: 100,
          text: 'You look right and see a timid little ostrich. You jump down and run to it. You decide to keep it as a pet.',
        },
      ],
    },
    {
      name: 'Under a Bush',
      variants: [
        {
          outcome: 'Game Over',
          probability: 100,
          text: 'The bear sees you hide, finds you, and kills you.',
        },
      ],
    },
    {
      name: 'Yell',
      variants: [
        {
          outcome: 'Game Over',
          probability: 100,
          text: 'You decide to yell. Yell what?',
          links: [{ display: 'Yippee', target: 'Yell Yipee' }, { display: 'Help', target: 'Yell Help' }],
        },
      ],
    },
    {
      name: 'Yell Help',
      variants: [
        {
          outcome: 'Game Over',
          probability: 100,
          text: 'You yell help and the bear helps himself to your delicious body.',
        },
      ],
    },
    {
      name: 'Yell Yipee',
      variants: [
        {
          outcome: 'You Win',
          probability: 100,
          text: 'You yell yipee and square dance with the bear. When you finish the bear thanks you for the dance.',
        },
      ],
    },
    {
      name: 'You Win',
      variants: [
        {
          outcome: 'None',
          probability: 100,
          text: 'You Win! Play Again?',
          links: [{ display: 'Yes', target: 'Bear Encounter' }, { display: 'No', target: 'Bear Encounter' }],
        },
      ],
    },
  ],
  genders: [
    //   {
    //     name: 'male',
    //     probability: 50,
    //     subject: 'he',
    //     object: 'him',
    //     possessive: 'his',
    //     reflexive: 'himself',
    //   },
    //   {
    //     name: 'female',
    //     probability: 50,
    //     subject: 'she',
    //     object: 'her',
    //     possessive: 'hers',
    //     reflexive: 'herself',
    //   },
  ],
  enemies: [
    {
      type: 'Bear',
      probability: 80,
    },
    {
      type: 'Gerbil',
      probability: 6.67,
    },
    {
      type: 'Horse',
      probability: 6.67,
    },
    {
      type: 'Shark',
      probability: 6.67,
    },
  ],
};
