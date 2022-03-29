import React from 'react'
import{ FormHeading} from './FormHeading'
import { FormDropdown } from './FormDropdown';
import Input from './Input';

export default function Plot() {
 
  return (
    <>
      <FormHeading value="Plot Details" />
      <form>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <FormDropdown
                name="plotType"
                width="60%"
                backgroundColor="#bd960a"
                color="white"
                // onChange={onChange}
                list={["Commercial", "Residential"]}
                disabled={true}
                // defaultValue={
                //   details.plotInformation && details.plotInformation[0].plotType
                // }
              />
            </div>

            <div className="col-6 mt-2 text-end">
              <FormDropdown
                name="block"
                width="60%"
                backgroundColor="#bd960a"
                color="white"
                list={["Commercial", "Residential"]}
                // onChange={onChange}
                disabled={true}
                // defaultValue={
                //   details.plotInformation && details.plotInformation[0].block
                // }
              />
            </div>

            <div className="col-6  mt-2">
              <FormDropdown
                name="plotArea"
                width="60%"
                backgroundColor="#bd960a"
                color="white"
                list={["Commercial", "Residential"]}
                // onChange={onChange}
                disabled={true}
                // defaultValue={
                //   details.plotInformation && details.plotInformation[0].plotArea
                // }
              />
            </div>

            <div className="col-6 text-end mt-3">
              <Input
                placeholder="Enter plot no"
                width="60%"
                name="plotNo"
                type="text"
                // onChange={onChange}
                disabled={true}
                // defaultValue={
                //   details.plotInformation && details.plotInformation[0].plotNo
                // }
                label="l"
                labelVal="Plot Number"
              />
            </div>

            <div className="col-6  mt-3">
              <Input
                placeholder="Enter plotPrice"
                width="60%"
                name="plotPrice"
                type="number"
                // onChange={onChange}
                disabled={true}
                // defaultValue={
                //   details.plotInformation &&
                //   details.plotInformation[0].plotPrice
                // }
                label="r"
                labelVal="Plot Price"
              />
            </div>

            <div className="col-6 text-end ">
              <Input
                placeholder="Enter plot latitude"
                width="60%"
                name="lat"
                type="number"
                // onChange={onChange}
                disabled={true}
                // defaultValue={
                //   details.plotInformation && details.plotInformation[0].lat
                // }
                label="l"
                labelVal="Latitude(Cordinates)"
              />
            </div>

            <div className="col-6  ">
              <Input
                placeholder="Enter plot longitude"
                width="60%"
                name="lng"
                type="number"
                // onChange={onChange}
                disabled={true}
                // defaultValue={
                //   details.plotInformation && details.plotInformation[0].lng
                // }
                label="r"
                labelVal="Longitude(Cordinates)"
              />
            </div>

          </div>
        </div>
      </form>

    </>
  )
}
