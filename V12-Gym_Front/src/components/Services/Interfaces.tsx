import { UUID } from "crypto"
import { string } from "yup"

 interface Athlete 
  {
    id           :UUID
    name           :string
    gender         :Gender
    birth_date     :Date
    phone_number   :string         
    email          :string         
    nif            :string         
    morada         :string
    description   :string
    monthlyPlanId  :string
    kindOfTraining :KindsOfTraining
    MonthlyPlan    :MonthlyPlan    
    Payment        :Payment[]
    created_at     :Date       
  

  }
  enum Gender {
    M,
    F
  }
  
  enum KindsOfTraining {
    KICK_BOX,
    MUSCULACAO,
    AEROBICA,
    BOX
  }
  
   interface TrainingPlan {
    id           : UUID
    name           :string
    description    :string
    kindOfTraining :KindsOfTraining

  }
  
   interface Payment {
    id             :UUID
    amountOfPayment :GLfloat
    typeOfPayment   :TypesOfPayment
    description     :string
    athleteId       :string
    articleId       :string
    monthlyPlanId   :string
    Athlete         :Athlete       
    MonthlyPlan     :MonthlyPlan | null | undefined 
    Article         :Article | null | undefined      
    File            :File[]
 
  }
  
  enum TypesOfPayment {
    MENSALIDADE,
    ARTIGO
  }
  
   interface MonthlyPlan {
    id      : UUID
    price       :GLfloat
    plan        :string
    observation :string
    Athlete     :Athlete[]
    Payment     :Payment[]

  }
  
  //Artigos
   interface Article {
    id        : UUID
    name        :string
    price       :GLfloat
    imageUrl    :string
    description :string
    amount      :BigInteger
    Payment     :Payment[]

  }
  
  //gerente
   interface Manager {
    id                 :  UUID
    name                 :string
    password             :string
    email                :string   
    phoneNumber          :string   
    passwordResetToken   :string
    passwordResetExpires :Date

  }
  
   interface File {
    id    :  UUID
    url        :string
    name       :string
    extension  :string
    updated_at :Date
    created_at :Date
    Payment    :Payment  
    paymentId  :string
  

  }
  
  export {File, MonthlyPlan, Article, TrainingPlan,Payment, KindsOfTraining, Athlete, Manager}