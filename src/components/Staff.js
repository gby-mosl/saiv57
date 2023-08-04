import StaffCard from "./StaffCard";
import { staffData } from "../assets/js/staffData";

function Staff() {
    return(
        <section className={"section bottom-border"} id={"staff"}>
            <h3 className={"title is-size-2 has-text-grey has-text-centered has-text-weight-bold mb-6"}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, veritatis!
            </h3>
            {staffData.map((data, key) => {
                return (
                    <StaffCard
                        key={key}
                        firstname={data.firstname}
                        lastname={data.lastname}
                        job={data.job}
                        description={data.description}
                        image={data.image}
                    />
                )
            })}
        </section>
    )
}
export default Staff