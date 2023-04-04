import * as H from './styleHome'
import {Person} from 'phosphor-react'


export function home(){
    return(
        <H.container>

                <H.sideBar>
                    <Person/>
                </H.sideBar>
                
            <H.containerContent>

                <H.header>

                </H.header>


                <H.content>
                                       
                </H.content>

            </H.containerContent>


        </H.container>
    )
}


