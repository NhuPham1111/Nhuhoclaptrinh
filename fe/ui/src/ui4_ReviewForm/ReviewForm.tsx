import Input from "./Input";
import Review from "./Review";
const num =4;
export default function ReviewForm (){
    return (<>
    <h1 className="text-4xl text-bold text-blue-500">UI_04: Overall rating requirement</h1>
    {/* <img src="./review-form.png" className="w-[600px] mb-4" alt="Review form image" /> */}
    <div className="flex flex-col">
        {/* <img src="/user-list.png" alt="user list" className="w-full" /> */}
        <img src={`/ui${num}.png`} alt="user list" className="w-full" />
      </div>
    <div className="w-[42rem] rounded-3xl bg-white p-16 space-y-4">
        <h1 className="font-sans text-2xl font-black">Overall rating</h1>
    
    <div>
        <div>
            <Review />
        </div>
        <p className="text-sm font-normal">Click to rate</p>
    </div>
    <Input title="Review title" placeholder="Example: Easy to use" type="text"/>
    <Input title="Produc review" placeholder="Example: Since I bought this a month ago, it has been used a lot. What I like best/What is worst about this product is..." type="textarea" />
    
    <p>Would you racommend this product to a friend?</p>
    <div className="flex gap-8">
        <div>
        <input className= "mr-2 scale-150 accent-black" 
        type="radio" id="yes" 
        name="fav_language" 
        value="yes"/>
        <label className="cursor-pointer" for="yes">Yes</label>
        </div>
        <div>
        <input className= "mr-2 scale-150 accent-black" 
        type="radio" 
        id="no" 
        name="fav_language" 
        value="no"/>
        <label className="cursor-pointer" for="no">No</label></div>
    </div>

    <div className="flex gap-x-2">
        <div className="grow">
        <Input title="Nickname" placeholder="Example bob27" type="text"/>
        </div>
        <div className="grow">
        <Input title="Email address (will not be published)" placeholder="Example your@email.com" type="text"/>
        </div>
    </div>
    <div>
        <input className= "mr-2 scale-150 accent-black" 
        type="radio" id="accept" 
        name="fav_language" 
        value="accept"/>
        <label className="cursor-pointer" for="yes">I accept the terms and conditions</label>
    </div>
    <p className="text-sm font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque voluptatibus mollitia neque dolores recusandae quas quod reiciendis exercitationem doloremque quisquam, quidem illo non unde. Dolor eligendi quo architecto quos facilis.</p>
    <button className="p-2 bg-violet-950 text-white rounded-md">Submit product review</button>
    </div>
    </>)
}