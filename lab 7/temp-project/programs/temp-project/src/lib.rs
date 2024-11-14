use anchor_lang::prelude::*;

declare_id!("9J7QDrKQfS82E17MP4GjRw5sT661ZbrrzyTF2aDNCw7V");

#[program]
pub mod temp_project {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        msg!("Greetings from: {:?}", ctx.program_id);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
