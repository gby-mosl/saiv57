import ActivityCard from "./ActivityCard"
import { activityData } from "../assets/js/activityData"
import { benefitsData } from "../assets/js/benefitsData"


function Activities() {
    return(
        <section className={"section activities bottom-border"} id={"activities"}>
            <div className={"main-activities"}>
                <h3 className={"title is-size-2 has-text-grey has-text-centered has-text-weight-bold mb-6"}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, veritatis!
                </h3>
                <div className={"activities-content"}>
                    {activityData.map((data, key) => {
                        return (
                            <ActivityCard
                                key={key}
                                image={data.image}
                                activity={data.name}
                            />
                        )
                    })}
                </div>
            </div>
            <div className={"benefits"}>
                <h4 className={"title has-text-grey has-text-centered is-4 mt-4"}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Commodi, inventore laborum aut obcaecati numquam atque.
                </h4>
                <div className={"activities-content"}>
                    {benefitsData.map((data, key) => {
                        return (
                            <ActivityCard
                                key={key}
                                image={data.image}
                                activity={data.name}
                            />
                        )
                    })}
                </div>
            </div>

        </section>
    )
}

export default Activities