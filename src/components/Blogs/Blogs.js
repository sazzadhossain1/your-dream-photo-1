import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div>
      <h1>This is blogs</h1>
      <div>
        <h4>Difference between authorization and authentication </h4>
        <p>
          উত্তর:Authentication হোল ব্যবহারকারীরা যাকে তারা দাবি করে তা যাচাই
          করার কাজ। এটি যেকোনো নিরাপত্তা প্রক্রিয়ার প্রথম ধাপ। আমরা কোন জায়গায়
          login করে একটা particular service কে acces করতে পারি যেমন আমি যখন
          ফেসবুক কে login করি তখন ইমেইল পাসওয়ার্ড দিয়ে লগিন করি তখন ফেসবুক বলে
          এই ইমেইল পাসওয়ার্ড authenticat করেছে ফেসবুক এর ভিতরে। তখন ফেসবুক আমাকে
          অ্যাকাউন্ট এর ভিতরে নিয়ে যায়। আমি কখন legally ইমেইল পাসওয়ার্ড দিয়ে
          লগিন করবো সেটাই হচ্ছে Authentication. Authorization: authorization হোল
          সিস্টেম সুরক্ষায় অনুমোদন হল ব্যবহারকারীকে একটি নির্দিষ্ট সংস্থান বা
          ফাংশন অ্যাক্সেস করার অনুমতি দেওয়ার প্রক্রিয়া। এই শব্দটি প্রায়ই
          এক্সেস কন্ট্রোল বা ক্লায়েন্টের বিশেষাধিকারের সাথে বিনিময়যোগ্যভাবে
          ব্যবহৃত হয়।
        </p>
        <br />
        <h4>
          Why are you using firebase? What other options do you have to
          implement authentication?
        </h4>
        <p>
          উত্তরঃ Firebase যে কারনে ব্যাবহার করা উচিত তা হোল-- Firebase হচ্ছে
          একটি back end সিস্টেম । জেটিতে মবাইলের জন্য বা ওয়েব এর জন্য ডাটা রেখে
          দিতে পারবো । এটি রিয়েল-টাইম ডাটাবেস সংযোগের অনুমতি দেয়, যার মানে
          একাধিক ব্যবহারকারী ডেটার পরিবর্তনগুলি দেখতে পারেন যখন ডেটা তৈরি বা
          সম্পাদনা করা হয়। ডেটা ট্রান্সমিশন ওয়েব সকেট দিয়ে পরিচালনা করা হয়
          তাই আপনাকে নতুন ডেটা পাওয়ার জন্য অনুরোধ পাঠাতে হবে না, আপনাকে
          শুধুমাত্র একবার সদস্যতা নিতে হবে।
        </p>
        <br />
        <h4>What other services does firebase provide other than authenticat</h4>
        <p>উত্তর ঃ Firestore database load করা যায় । Realtime database load করা যায় । এর ভিতরে storage অ রয়েছে । Hosting করা যায়। এবং আর অনেক কিছু </p>
      </div>
    </div>
  );
};

export default Blogs;
