import React from 'react'
import './HealthArticles.css'

function HealthArticles() {
    return (
        <div>
            <React.Fragment>
            <div className="articles">
  <div className="row">
    <div class="col-sm">
      <div class="healthcards" >
  <img src="https://foodyoushouldtry.com/wp-content/uploads/2019/04/summer-heat.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title"><b>5 foods that will help you beat the summer heat</b></h5>
    <p class="card-text">
        <ul>
            <li> Watermelon: Made up of 92% water, it's an excellent hydrating fruit! </li>
            <li> Cucumber: A summer must-have! It eliminates toxins from the body and keeps you hydrated.</li>
            <li> Celery: This vegetable is 95% water, which makes it a good option to keep necessary fluid levels up.</li>
            <li> Yogurt: It is made in the form of ice-cream or frozen yogurt. It is cool, nutritious and light.</li>
            <li> Cauliflower: It is rich in vitamin C and several minerals and micronutrients.</li>
        </ul>
        </p>
    <a href="https://www.msn.com/en-in/lifestyle/topstories/5-foods-that-will-help-you-beat-the-summer-heat/ar-BB1fORaZ" class="btn btn-primary">Know more</a>
  </div>
</div>
</div>

    <div className="col-sm">
      <div className="healthcards" >
        <img src="https://www.phenicell.com/blog/wp-content/uploads/2018/01/diabetes.jpg" className="card-img-top" alt="..."/>
        <div className="card-body">
        <h5 className="card-title"><b>5 Myths of diabetes debunked by an expert</b></h5>
        <p className="card-text"> 
        <ul>
        <li>Myth 1-One can never become free of diabetes.It can be managed with certain preventative steps such as a well-balanced diet, lifestyle changes, herbal therapies and yoga.</li>
        <li>Myth 2- Diabetes is hereditary.This is just half-truth !</li>
        <li>Myth 3- Sugar is the cause for diabetes. Diabetes is caused by a lack of a hormone, insulin in the bloodstream, not by eating too much sugar.</li>
        <li>Myth 4- A diabetic person should not eat rice</li>
        <li>Myth 5- An obese person will also suffer from diabetes. Certainly not. Diabetes is caused by a number of factors.
            Obesity can be a factor in the pre-diabetic stage</li>
        </ul>
        </p>
        <a href="https://www.msn.com/en-in/lifestyle/topstories/5-myths-of-diabetes-debunked-by-an-expert/ar-BB1fJ2JE" className="btn btn-primary">Know more</a>
        </div>
      </div>
    </div>

    <div className="col-sm">
        <div className="healthcards" >
        <img src="https://ecoosfera.com/wp-content/imagenes/Supta-Baddha-konasana.jpg" className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title"><b>If you have trouble sleeping, try out these yoga poses</b></h5>
            <p className="card-text">
                <ul>
                    <li>Savasana or corpse pose is the final resting pose of yoga practice.</li>
                    <li>Supta Baddha Konasana or reclining bound angle pose releases tension from your hips and groin area. 
                        You should take precautions if you suffer from knee, hip, and groin injuries. </li>
                    <li>Balasana or the wide-knee child’s pose is known to calm down the body.</li>
                    <li>Viparita Karani or legs up the wall pose helps relax your legs and recirculate blood flow. </li>
                </ul>
            </p>
             <a href="https://zeenews.india.com/health/if-you-have-trouble-in-sleeping-try-out-these-yoga-poses-2349533" className="btn btn-primary">Know more</a>
        </div>
        </div>
        </div>
    </div>
</div>
</React.Fragment>
</div>
    )
}

export default HealthArticles;
