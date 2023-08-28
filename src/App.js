import { useEffect, useState } from 'react';
import './App.css';
import alanBtn from '@alan-ai/alan-sdk-web';

const alanKey = "73c15879a44e7474893452435c1ab7612e956eca572e1d8b807a3e2338fdd0dc/stage"
const newApiKey = `1e59334392114f02b478215a2d6f4ae5`

function App() {

  const [articles, setArticles] = useState([]);
  
  useEffect(()=>{
    alanBtn({
      key: alanKey,
      onCommand: ({command, articles})=>{
        if(command == 'newNews'){
          console.log(articles)
        }
      }
    })
  }, [])

  return (
    <div className="App">
      <h1>Alan AI News Application</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis minima eos voluptas eius, iusto modi maiores in. Magnam magni reprehenderit natus velit saepe dolor quas quos eaque molestias nobis. Veritatis modi deleniti voluptate, eum architecto quaerat, quis error excepturi delectus, quisquam ipsa veniam nostrum aliquam nihil deserunt. Mollitia debitis necessitatibus deserunt ea neque totam, reprehenderit delectus dolorem odio beatae aliquam optio assumenda reiciendis tenetur ut atque, accusantium cumque enim repellat magni tempore nihil laudantium voluptatum. Sint, ab. Nemo aliquid impedit reiciendis dolore, a odit adipisci atque sit eligendi. Placeat, ratione corrupti dolor labore recusandae quos omnis. Nemo ut obcaecati ea eos dolorem. Eum dolor, atque accusantium velit reiciendis consequuntur temporibus amet, minus tempora beatae delectus. Rem modi doloribus dignissimos ea vel illo corrupti accusantium placeat? Voluptate numquam quod animi laudantium tenetur nobis, nemo quam, ullam voluptates similique laborum magnam quidem iste, in voluptatum blanditiis. Qui laudantium dolores magni placeat eos in eligendi corporis consequatur molestiae voluptates facere porro dolorum a unde reprehenderit, ex adipisci ipsam sit tempora debitis. Placeat totam praesentium quo voluptate nostrum ullam doloribus ipsam illum obcaecati soluta. In repudiandae reiciendis facilis earum nam aspernatur magni, quibusdam dignissimos explicabo, natus officiis repellendus eius, inventore porro consequuntur sed aliquid maxime at expedita vel illum! Obcaecati non, nostrum neque quis cum pariatur libero quo natus ab porro nam sunt eligendi optio repudiandae excepturi voluptate veritatis molestias sapiente recusandae beatae ex vero dolore! Adipisci possimus laborum odio rerum. Ut repellat provident, cum recusandae quae delectus? Assumenda corporis qui magnam quo ullam voluptate dolor quos. Molestias earum culpa veniam iste? Nam corrupti, beatae dolorum et autem quam exercitationem asperiores voluptas enim quo tempore ducimus ab, odio esse minima quaerat delectus alias necessitatibus! Quisquam debitis assumenda repudiandae magni harum distinctio culpa, iure voluptatum dolorem deleniti molestiae quis omnis impedit non pariatur magnam consequuntur, sint libero itaque accusantium vero commodi. Dolore, atque alias! Et sequi molestiae tempore modi quae, ducimus, optio dolorum quam velit beatae soluta, corrupti temporibus non totam quasi accusamus deleniti maiores qui eum. Ut libero repudiandae perferendis esse tempora nobis deleniti, ratione velit sunt harum tenetur ex debitis eveniet! Possimus natus eligendi, alias quibusdam dolorem iure quod consequuntur eius, numquam ipsam molestias dolore placeat similique maxime vero maiores exercitationem aperiam voluptates magni neque repellendus est nesciunt distinctio voluptas! Impedit quisquam sint quidem? Quibusdam quam maxime, itaque voluptate earum hic quo at quia, quidem reiciendis amet enim natus aliquam sapiente molestias numquam velit ratione harum animi pariatur voluptatibus qui eum tempora libero. Incidunt quo minus tempore fuga autem repellendus odit dolore rem nulla sapiente placeat magni consequuntur praesentium veritatis velit, quidem eius adipisci blanditiis molestiae nemo non maxime quis. Ducimus dolorem cumque nisi assumenda minima veniam ullam ad ipsa amet. Debitis, saepe laboriosam hic odit odio atque, dolor minima nobis animi asperiores doloribus eligendi vel ipsum! Omnis consequuntur doloribus, laboriosam vel reprehenderit distinctio excepturi qui culpa magnam. Impedit odit porro sit, ipsum harum aliquid nemo perspiciatis, dolorem, sequi soluta veniam natus eligendi? Ab voluptate alias impedit quos reiciendis animi, asperiores corrupti accusamus illo voluptatem perferendis quidem harum maxime at consectetur reprehenderit omnis dolor esse facere voluptas! Provident consectetur necessitatibus illo officiis, dolores, dolorem rerum minus obcaecati iste eum excepturi, ex assumenda aperiam libero impedit! Iure voluptate assumenda architecto. Libero corrupti deleniti culpa eveniet assumenda totam rem? Ex veniam ad sit autem ducimus excepturi quas cumque dolorum voluptatibus pariatur modi reiciendis, libero ratione repudiandae impedit, quo alias odio saepe consequuntur sapiente illum? Cum, voluptate? Autem nihil sed dolore alias voluptate ratione obcaecati, et labore consequatur deserunt numquam doloremque sapiente? Minus corrupti ipsa praesentium, eaque debitis ipsam impedit ducimus, consequatur fugit quas eos mollitia? Repellat adipisci sapiente dolor quidem quae nisi voluptatibus necessitatibus dignissimos ullam harum laudantium in, soluta id fugiat consectetur iste eos reprehenderit est illo! Officia id provident minus ullam suscipit cupiditate amet sed modi, veritatis natus cumque earum itaque eveniet, accusantium recusandae illum, perspiciatis error officiis velit! Eveniet rerum animi ipsam deleniti inventore ratione iusto laboriosam explicabo molestiae in eligendi tempora veritatis sit suscipit illo, earum, temporibus soluta? Ex, quam? Incidunt quod veniam, repellat culpa eligendi accusantium deleniti rem amet totam id, voluptate exercitationem? Quibusdam ipsa, fuga ad cum expedita est doloribus provident dicta, laborum sit soluta corrupti molestias voluptas perspiciatis eius culpa veniam voluptate pariatur amet. At earum aliquam facere iste enim voluptatem deleniti voluptate adipisci laboriosam, culpa inventore cum omnis tempore, tenetur iusto distinctio quis! Distinctio, expedita soluta? Harum porro atque omnis nostrum corporis, quis sunt exercitationem expedita provident natus ratione consequuntur odit. Impedit eum eveniet, veritatis eaque nobis id? Tenetur neque sed officia sequi facilis molestias illo nisi consequatur amet odit quisquam officiis voluptates optio incidunt id corporis maiores, nostrum, inventore rerum doloremque, quam ea ut a. Tempore doloribus quisquam illo non est temporibus sit in reprehenderit sed reiciendis modi repudiandae illum veniam ratione aperiam harum nesciunt a animi accusamus nihil dolorem, vero consequuntur dolore. Quia sequi harum, quis corporis voluptates ex soluta sapiente ad, similique assumenda pariatur at ducimus, incidunt dolorum quasi est. Ad, sapiente dicta in eum esse inventore amet enim quia itaque, recusandae officiis reiciendis atque? Nesciunt perspiciatis quae dignissimos non. Sequi, ipsam. Non, expedita, dolorem voluptatum sint quis rerum tempore aliquid reiciendis neque, reprehenderit velit. Suscipit, illum similique modi magnam dolor voluptate sunt in aut at nam obcaecati dignissimos nemo animi natus quos corporis corrupti, illo, neque iusto harum. Voluptate officiis labore accusantium at deserunt architecto, ex error voluptates ea, soluta, quos officia rem! Minus molestiae voluptatibus facilis saepe quo, nemo error fugit aut perspiciatis quis quisquam? Suscipit corrupti possimus rem deserunt veritatis ex a inventore officia iste aliquid, dolores incidunt, tempore dolorem soluta officiis excepturi ipsum eaque tempora eum est voluptatibus iure! Unde qui iste architecto incidunt odio nostrum, maxime natus sapiente eius, pariatur alias similique vel optio! Impedit esse illo et cumque sunt, id, repellat rem autem soluta cupiditate provident. Aliquam perferendis suscipit ut, nisi excepturi commodi itaque vitae assumenda, quis, laborum odit! Tempora tempore optio quas soluta ipsam quod doloremque deserunt, placeat doloribus animi sed neque nobis labore harum voluptatem minima?</p>
    </div>
  );
}

export default App;
