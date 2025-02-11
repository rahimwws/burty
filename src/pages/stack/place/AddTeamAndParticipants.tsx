import { View, ScrollView, ActivityIndicator } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import ScreenLayout from "@/shared/ui/Layout";
import { Header } from "@/components/header";
import { LargeButton } from "@/shared/ui/Button";
import { colors } from "@/shared/lib/theme";
import ReviewCard from "@/components/card/ReviewCard";
import { useReviews } from "@/features/reviews";
import { RouteProp, useRoute } from "@react-navigation/native";
import { toast } from "@/shared/ui/Toast";
import { useAppNavigation } from "@/shared/lib/navigation";
import Input from "@/shared/ui/Input";
import useCreateTeam from "@/features/booking/lib/hooks/useCreateTeam";
import useCreateTeamParticipants from "@/features/booking/lib/hooks/useCreateTeamParticipants";
import Typography from "@/shared/ui/Typography";
import isEmail from "@/utils/validators/isEmail";

type RouteParams = {
   MyScreen: {
      bookingId: string
   };
};

type MyScreenRouteProp = RouteProp<RouteParams, "MyScreen">;
const AddTeamAndParticipants = () => {
   const navigator = useAppNavigation();
   const { params: { bookingId } } = useRoute<MyScreenRouteProp>();
   const [createdTeamId, setCreatedTeamId] = useState<string | null>(null);
   const [teamName, setTeamName] = useState("");
   const [participantEmail, setParticipantEmail] = useState("");

   const {
      mutate: createTeam,
      isPending: creatingTeam,
   } = useCreateTeam();
   const {
      mutate: createTeamParticipant,
      isPending: creatingTeamParticipant,
   } = useCreateTeamParticipants();

   const handleCreateTeam = useCallback(() => {
      if (!teamName) {
         toast.show({
            type: "error",
            description: "Enter team name"
         })
         return;
      }
      createTeam({
         bookingId,
         teamName
      }, {
         onSuccess(data) {
            setCreatedTeamId(data?.data?.id);
         },
         onError(err) {
            console.log(err)
         }
      })
   }, [teamName, bookingId]);

   const handleAddParticipant = useCallback(() => {
      if (!isEmail(participantEmail)) {
         toast.show({
            type: "error",
            description: "Email address should be valid"
         })
         return;
      }
      createTeamParticipant({
         bookingId,
         teamId: createdTeamId!,
         email: participantEmail
      }, {
         onSuccess() {
            setParticipantEmail("");
         }
      })
   }, [bookingId, createdTeamId, participantEmail])

   return (
      <ScreenLayout>
         <Header type="stack" title="Create team" />

         <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ marginTop: '5%' }}
         >
            <View style={{ flexDirection: 'column', gap: 15, marginHorizontal: '1%' }}>
               {
                  !createdTeamId ?
                     <>
                        <Input
                           value={teamName}
                           onChangeText={(txt) => setTeamName(txt)}
                           placeholder="Enter team name..."
                        />
                        <LargeButton
                           bg={colors.primary}
                           text="Add team"
                           textColor="primary"
                           isRoute={false}
                           theme="outline"
                           action={() => handleCreateTeam()}
                           isLoading={creatingTeam}
                        />
                     </>
                     :
                     <>
                        <Typography color="light" size={18} styles={{ marginVertical: '3%' }}>
                           {teamName}
                        </Typography>
                        <Input
                           value={participantEmail}
                           onChangeText={(txt) => setParticipantEmail(txt)}
                           placeholder="Enter participant email address..."
                        />
                        <LargeButton
                           bg={colors.primary}
                           text="Add participant"
                           textColor="primary"
                           isRoute={false}
                           theme="outline"
                           action={() => handleAddParticipant()}
                           isLoading={creatingTeamParticipant}
                        />
                     </>
               }
            </View>
         </ScrollView>
      </ScreenLayout>
   );
};

export default AddTeamAndParticipants;
