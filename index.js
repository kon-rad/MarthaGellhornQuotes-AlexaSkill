

/*
 * index.js
 *
 * Home of the handler for the Martha Gellhorn Quote Alexa skill.
 */

const quotes = [
"I tell you loneliness is the thing to master. Courage and fear, love, death are only parts of it and can easily be ruled afterwards. If I make myself master my own loneliness there will be peace or safety: and perhaps these are the same.",
"The only way I can pay back for what fate and society have handed me is to try, in minor totally useless ways, to make an angry sound against injustice.",
"War happens to people, one by one. That is really all I have to say and it seems to me I have been saying it forever. Unless they are immediate victims, the majority of mankind behaves as if war was an act of God which could not be prevented; or they behave as if war elsewhere was none of their business. It would be a bitter cosmic joke if we destroy ourselves due to atrophy of the imagination.",
"Nothing is better for self-esteem than survival.",
"I know enough to know that no woman should ever marry a man who hated his mother.",
"Why do people talk of the horrors of old age? It's great. I feel like a fine old car with the parts gradually wearing out, but I'm not complaining,... Those who find growing old terrible are people who haven't done what they wanted with their lives.",
"A broken heart is such a shabby thing, like poverty and failure and the incurable diseases which are also deforming. I hate it and am ashamed of it, and I must somehow repair this heart and put it back into its normal condition, as a tough somewhat scarred but operating organ.",
"What the trees can do handsomely-greening and flowering, fading and then the falling of leaves-human beings cannot do with dignity, let alone without pain.",
"Life is not long at all, never long enough, but days are very long indeed.",
"the ends never justify the means because IT never ends.",
"Gradually I came to realize that people will more readily swallow lies than truth, as if the taste of lies was homey, appetizing: a habit.",
"travel is compost for the mind",
"Here one has the perfect example of justice: the men have kept their women enslaved...stupid and limited and apart, for their male vanity and power; result: the dull women bore the daylights out of the men.",
"If I were a first rate writer, I wouldn't mind a bit. What does depress me is this: it is so desperately hard and so obsessive and so lonely to write that, in return for all this work, one would like a little self satisfaction. And that is never going to come, for the simple reason that I do not deserve it. I cannot be a good enough writer. You see? I call it grim. But the future looks awfully clear to me",
"Citizenship is a tough occupation which obliges the citizen to make his own informed opinion and stand by it",
"I feel terribly strange, like a shadow, and full of dread. I dread the time ahead, the amputating time, I do not see how to manage it. I do not want the world to go dark and narrow and mean, and the world has been very unlovely in my eyes, and I very unlovely in it…",
"And this urge to run away from what I love is a sort of sadism I no longer pretend to understand."
"My kind of loneliness now has no cure, you know; it is something I expect to live with until I die. Friends are heavenly kind, sometimes fun; it would be fatal not to have them. But I by no means need or want daily contact; perhaps it takes as much out of me as it gives, perhaps takes more.",
"It is much harder to be lonely, when you have for a while stopped being lonely. I was used to having only myself, cold and hard as that is; I could live with it. And now I wait, for a voice, a face, a body, that is not going to be here, is not mine, does not in any case wait as I do, nor share this homesickness. […] How to explain that I taught myself to be tough and indifferent, because it mattered too much and learned not even to weep in my mind not to notice.",
"Italy was about churches, Greece it's ruins; but Israel was about surviving and about feeling glad.",
"I wait every year for summer, and it is usually good, but it is never as good as that summer I am always waiting for.",
"On the night of New Year’s Day, I thought of a wonderful New Year’s resolution for the men who run the world: get to know the people who only live in it.",
"I love you. Have a hell of a good time. I don’t really know what else is worth having.",
"No wars, in the war-logged record of our species, have been terminal. Until now, when we know that nuclear war would be the death of our planet. It is beyond belief that any governments–those brief political figures–arrogate to themselves the right to stop history, at their discretion.",
"People do not yet realize (because the mind isn't built that way) what war can be. They fear it but surely they fear it the way children fear nightmares, dimly, without definite images in their heads of how it will all work out.",
"I took only one suitcase, and a cosmetics case for medicines but I was worried about books. Solitude is all right with books, awful without."
]
const aboutText = "This skill was developed for the poet Ming Washington."


exports.handler = (event, context) => {

  try {

    switch (event.request.type) {

      case 'LaunchRequest':
        console.log('LAUNCH REQUEST')
        context.succeed()
        break

      case 'IntentRequest':
        console.log('INTENT REQUEST')

        switch (event.request.intent.name) {

          case 'marthaGellhornQuote':
            const random = Math.floor(Math.random() * quotes.length);
            let quote = 'Here is your Martha Gellhorn Quote: ' + quotes[random];
            context.succeed(createResponse(createSpeech(quote), {}))
            break

          case 'AboutSkill':
            context.succeed(createResponse(createSpeech(aboutText), {}))
            break

          default:
            console.log('Invalid intent name: ' + event.request.intent.name)

        }

        break

      case 'SessionEndedRequest':
        console.log('SESSION ENDED REQUEST')
        break

      default:
        context.failed('Invalid request type: ' + event.request.type)

    }

  } catch (err) {
    context.fail('Error: ' + err)
  }

}

function createSpeech(output, end) {
  return {
    outputSpeech: {
      type: 'PlainText',
      text: output
    },
    shouldEndSession: end
  }
}

function createResponse(speechlet, attributes) {
  return {
    version: '1.0',
    sessionAttributes: attributes,
    response: speechlet
  }
}