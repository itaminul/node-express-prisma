/*  multiple insert 


model User {
  id    String  @id @default(auto()) @map("_id") @db.ObjectId
  email String  
  name  String?
  password  String
  posts Post[]
  profile Profile[]
  activeStatus Int @default(1)
}

model Profile {
  id String @id @default(auto()) @map("_id") @db.ObjectId
  profileName String
  author User @relation(fields: [userId], references: [id])
  userId String @db.ObjectId
}

model Post {
  id          String     @id @default(auto()) @map("_id") @db.ObjectId
  postTitle String
  author      User  @relation(fields: [authorId], references: [id])
  authorId    String     @db.ObjectId
  categories  Category[] @relation(fields: [categoryIds], references: [id])
  categoryIds String[]   @db.ObjectId

}
model Category {
  id      String   @id @default(auto()) @map("_id") @db.ObjectId
  posts   Post[]   @relation(fields: [postIds], references: [id])
  postIds String[] @db.ObjectId
}

model Batch {
  id String @id @default(auto()) @map("_id") @db.ObjectId
  batchName String
  serialNo String
}



*/


//Json data for multiple tale

//User, Profile, and Post tables

  {
 "name": "Elsasd",
 "email" : "emai9@gmail.com",
 "password": "1234567",
 "posts": [
   {
     "postTitle": "profileName 2"
   },
   {
     "postTitle": "profileName 3"
   }
 ],
 "profile": [
     {
     "profileName": "profile 1"
     },
    {
     "profileName": "profile 2"
     }
 ]
}
 


exports.createProfile =  async(req, res, next)  => {
  try {       
    const { name, email, password, posts, profile } = req.body
    const postData = posts.map((post) => {
      return {
        postTitle: post.postTitle

      }
    })

    const profileData = profile.map((prof) => {
      return {
        profileName: prof.profileName

      }
    })

    const result =  await prisma.user.create({
      data: {
        name,
        email,
        password,
        posts: {
          create: postData,
        },
        profile: {
          create: profileData
        },
      }
    })

    res.send(result)
   } catch (error) {
   res.send(error)
    
   }
  }
