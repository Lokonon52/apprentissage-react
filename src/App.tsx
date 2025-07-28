import Messages from "./pages/Messages"
const TEXTES=[
  {
    "id": "6886b29d3c2dd8052ae48789",
    "texte": "amet eiusmod quis consequat fugiat enim aliquip amet non fugiat et sint in magna elit aliqua adipisicing sit laborum aliqua",
    "greeting": "Hello, undefined! You have 4 unread messages.",
    "favoriteFruit": "banana"
  },
  {
    "id": "6886b29d8ab211003e32ac1c",
    "texte": "magna irure aute cillum velit reprehenderit magna est labore ad ullamco nostrud magna eu nulla voluptate enim nisi commodo elit",
    "greeting": "Hello, undefined! You have 1 unread messages.",
    "favoriteFruit": "apple"
  },
  {
    "id": "6886b29dfae9e64d66d21216",
    "texte": "reprehenderit est sunt sit ea velit aliqua voluptate occaecat duis dolor anim sit amet anim qui aliqua dolor pariatur et",
    "greeting": "Hello, undefined! You have 9 unread messages.",
    "favoriteFruit": "banana"
  },
  {
    "id": "6886b29d0ec726a88412e2a4",
    "texte": "aliqua anim exercitation nisi ea nulla minim aliqua magna ipsum est ea enim sit et aute aliquip ipsum anim officia",
    "greeting": "Hello, undefined! You have 4 unread messages.",
    "favoriteFruit": "strawberry"
  },
  {
    "id": "6886b29dd60e0678d8faaabf",
    "texte": "nulla nulla aute ullamco officia sit ut irure eu voluptate voluptate officia reprehenderit sunt tempor consectetur duis anim velit consequat",
    "greeting": "Hello, undefined! You have 9 unread messages.",
    "favoriteFruit": "apple"
  },
  {
    "id": "6886b29de8f0da8049c96cd4",
    "texte": "nostrud sit sunt laboris eiusmod laborum velit anim amet enim consectetur qui eu culpa sunt voluptate non amet enim amet",
    "greeting": "Hello, undefined! You have 3 unread messages.",
    "favoriteFruit": "apple"
  },
  {
    "id": "6886b29d78a01d9f066a61e9",
    "texte": "eiusmod nostrud ut proident nisi deserunt id culpa duis consequat sit esse voluptate exercitation mollit aliquip dolore incididunt ex qui",
    "greeting": "Hello, undefined! You have 6 unread messages.",
    "favoriteFruit": "apple"
  },
  {
    "id": "6886b29d9417a056c19c2774",
    "texte": "aliqua magna amet elit sunt in ex nostrud veniam nisi sit deserunt aliqua in sit pariatur nostrud cupidatat officia amet",
    "greeting": "Hello, undefined! You have 9 unread messages.",
    "favoriteFruit": "strawberry"
  },
  {
    "id": "6886b29dade5f8643c1db0f3",
    "texte": "proident sit voluptate esse do et culpa qui duis exercitation ut proident ad sit dolore sint sunt cillum cupidatat eu",
    "greeting": "Hello, undefined! You have 7 unread messages.",
    "favoriteFruit": "apple"
  },
  {
    "id": "6886b29de47c4c1630028217",
    "texte": "est irure nisi excepteur ea mollit proident do excepteur deserunt veniam ea mollit eu commodo cillum et anim tempor sunt",
    "greeting": "Hello, undefined! You have 6 unread messages.",
    "favoriteFruit": "strawberry"
  }
]

function App() {
  

  return (
<div>
 
  <Messages messages={TEXTES} />
  
</div>

  )
}

export default App
